"use server";

import { z } from "zod";
import { Resend } from "resend";
import config from "@/lib/config";
import ContactEmail from "@/components/react-email";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(5, "Message must be at least 8 characters."),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

export async function sendContactEmail(
  formData: z.infer<typeof contactSchema>,
): Promise<ContactFormState> {
  // Validate with safeParse
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = parsed.data;

  if (!config.env.resend_token) {
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  const resend = new Resend(config.env.resend_token);

  const { error } = await resend.emails.send({
    from: "Miracle IT Contact Form <contact@miracle-it-solutions.com>",
    to: "contact@miracle-it-solutions.com",
    replyTo: email,
    subject: `[Contact] ${subject}`,
    react: ContactEmail({ name, email, subject, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      message: "Failed to send your message. Please try again.",
    };
  }

  return {
    success: true,
    message:
      "Message sent successfully! We'll get back to you within 24 hours.",
  };
}
