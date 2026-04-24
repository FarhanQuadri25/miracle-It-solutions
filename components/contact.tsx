"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./section-header";
import { sendContactEmail, type ContactFormState } from "@/actions/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(5, "Message must be at least 8 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@miracle-it-solutions.com",
    sub: "We reply within 24 hours",
  },
];

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [submitState, setSubmitState] = useState<ContactFormState | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const isSubmitSuccessful = submitState?.success === true;

  function onSubmit(values: ContactFormValues) {
    setSubmitState(null);

    startTransition(async () => {
      const result = await sendContactEmail(values);
      setSubmitState(result);

      if (result.success) {
        form.reset();
      } else if (result.errors) {
        // Map server-side field errors back into react-hook-form
        Object.entries(result.errors).forEach(([field, messages]) => {
          form.setError(field as keyof ContactFormValues, {
            type: "server",
            message: messages?.[0],
          });
        });
      }
    });
  }

  return (
    <section
      id="contact"
      className={cn(
        "max-w-7xl mx-auto px-5 sm:px-8 py-8  border-new-dark/10 relative overflow-hidden",
        inter.className,
      )}>
      {/* Grid bg */}
      {/* <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      /> */}

      <div className="relative z-10">
        <SectionHeader
          tag="Get In Touch"
          header="Let's Build"
          span="Together"
          description="Have a project in mind? Tell us about it and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left — contact info + note */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="bg-[#f0f0e8] border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-200">
                <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-new-accent" />
                </div>
                <div>
                  <p
                    className={cn(
                      "text-[10px] uppercase tracking-[0.3em] text-new-neutral font-bold mb-0.5",
                      inter.className,
                    )}>
                    {item.label}
                  </p>
                  <p
                    className={cn(
                      "text-sm font-black text-new-dark",
                      inter.className,
                    )}>
                    {item.value}
                  </p>
                  <p className="text-[11px] text-new-neutral mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Response guarantee card */}
            {/* <div className="bg-[#1a1a1a] border-2 border-[#1a1a1a] p-5 shadow-[3px_3px_0px_0px_#1a1a1a]">
              <p className={cn("text-[10px] uppercase tracking-[0.3em] text-new-accent font-bold mb-2", inter.className)}>
                Response Guarantee
              </p>
              <p className="text-[#f0f0e8] text-sm font-medium leading-relaxed">
                We respond to every inquiry within{" "}
                <span className="text-new-accent font-black">24 hours</span>,
                no exceptions. Your project matters to us.
              </p>
            </div> */}

            {/* What happens next */}
            {/* <div className="bg-[#f0f0e8] border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a]">
              <div className="bg-[#1a1a1a] px-5 py-3">
                <p className={cn("text-[10px] uppercase tracking-[0.3em] text-[#f0f0e8]/50 font-bold", inter.className)}>
                  What Happens Next
                </p>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { step: "01", text: "We review your message within 24 hours." },
                  { step: "02", text: "A team member reaches out to discuss your project." },
                  { step: "03", text: "We send a tailored proposal and timeline." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className={cn("text-[11px] font-black text-new-accent tabular-nums shrink-0 mt-0.5", inter.className)}>
                      {item.step}
                    </span>
                    <div className="w-px self-stretch bg-[#1a1a1a]/10 mx-0.5 shrink-0" />
                    <p className="text-[12px] text-new-neutral font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a]">
            {/* Form header bar */}
            <div className="bg-[#1a1a1a] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5f57]" />
                <div className="w-2 h-2 bg-[#febc2e]" />
                <div className="w-2 h-2 bg-[#28c840]" />
              </div>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] text-[#f0f0e8]/50 font-bold",
                  inter.className,
                )}>
                Send Message
              </span>
            </div>

            <div className="p-6 sm:p-8">
              {isSubmitSuccessful ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center py-16 gap-5">
                  <div className="w-14 h-14 bg-new-accent border-2 border-[#1a1a1a] flex items-center justify-center shadow-[3px_3px_0px_0px_#1a1a1a]">
                    <CheckCircle2 size={24} className="text-new-dark" />
                  </div>
                  <div className="text-center">
                    <h3
                      className={cn(
                        "text-new-dark font-black text-xl uppercase tracking-tight mb-2",
                        inter.className,
                      )}>
                      Message Sent!
                    </h3>
                    <p className="text-new-neutral text-sm">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitState(null)}
                    className={cn(
                      "mt-2 px-6 py-2.5 bg-[#f0f0e8] text-new-dark text-xs font-black uppercase tracking-widest border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-200",
                      inter.className,
                    )}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5">
                    {/* Server-level error banner (non-field error) */}
                    {submitState &&
                      !submitState.success &&
                      !submitState.errors && (
                        <div className="flex items-center gap-3 p-3 border-2 border-red-500 bg-red-50 shadow-[2px_2px_0px_0px_#ef4444]">
                          <AlertCircle
                            size={15}
                            className="text-red-600 shrink-0"
                          />
                          <span
                            className={cn(
                              "text-xs font-bold text-red-600 uppercase tracking-widest",
                              inter.className,
                            )}>
                            {submitState.message}
                          </span>
                        </div>
                      )}

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              className={cn(
                                "text-[10px] uppercase tracking-[0.3em] font-bold text-new-dark",
                                inter.className,
                              )}>
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your Name"
                                {...field}
                                className={cn(
                                  "border-2 border-[#1a1a1a] rounded-none bg-[#f0f0e8] focus-visible:ring-0 focus-visible:border-new-accent placeholder:text-new-neutral/40 text-new-dark font-medium h-11 shadow-[2px_2px_0px_0px_#1a1a1a] focus:shadow-none transition-all",
                                  inter.className,
                                )}
                              />
                            </FormControl>
                            <FormMessage className="text-[11px] font-semibold" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              className={cn(
                                "text-[10px] uppercase tracking-[0.3em] font-bold text-new-dark",
                                inter.className,
                              )}>
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your Email"
                                type="email"
                                {...field}
                                className={cn(
                                  "border-2 border-[#1a1a1a] rounded-none bg-[#f0f0e8] focus-visible:ring-0 focus-visible:border-new-accent placeholder:text-new-neutral/40 text-new-dark font-medium h-11 shadow-[2px_2px_0px_0px_#1a1a1a] focus:shadow-none transition-all",
                                  inter.className,
                                )}
                              />
                            </FormControl>
                            <FormMessage className="text-[11px] font-semibold" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={cn(
                              "text-[10px] uppercase tracking-[0.3em] font-bold text-new-dark",
                              inter.className,
                            )}>
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help you?"
                              {...field}
                              className={cn(
                                "border-2 border-[#1a1a1a] rounded-none bg-[#f0f0e8] focus-visible:ring-0 focus-visible:border-new-accent placeholder:text-new-neutral/40 text-new-dark font-medium h-11 shadow-[2px_2px_0px_0px_#1a1a1a] focus:shadow-none transition-all",
                                inter.className,
                              )}
                            />
                          </FormControl>
                          <FormMessage className="text-[11px] font-semibold" />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={cn(
                              "text-[10px] uppercase tracking-[0.3em] font-bold text-new-dark",
                              inter.className,
                            )}>
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, timeline, and goals..."
                              rows={5}
                              {...field}
                              className={cn(
                                "border-2 border-[#1a1a1a] rounded-none bg-[#f0f0e8] focus-visible:ring-0 focus-visible:border-new-accent placeholder:text-new-neutral/40 text-new-dark font-medium resize-none shadow-[2px_2px_0px_0px_#1a1a1a] focus:shadow-none transition-all",
                                inter.className,
                              )}
                            />
                          </FormControl>
                          <FormMessage className="text-[11px] font-semibold" />
                        </FormItem>
                      )}
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className={cn(
                        "w-full flex items-center justify-center gap-2 py-3.5 bg-new-accent text-new-dark text-sm font-black uppercase tracking-widest border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-[4px_4px_0px_0px_#1a1a1a] transition-all duration-200",
                        inter.className,
                      )}>
                      {isPending ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
