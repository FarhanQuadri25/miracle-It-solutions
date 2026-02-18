"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react"
import { inter } from "@/lib/fonts"
import { Card } from "./ui/card"

// Zod validation schema
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().optional(),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    })

    function onSubmit(values: FormValues) {
        console.log("Form Values:", values)
        // Here you would typically send to API
        // console.log(JSON.stringify(values, null, 2))
    }

    return (
        <section id="contact" className={cn('border-y', inter.className)}>
            <div className='max-w-7xl bg-[#fafafa] mx-auto border-x-2 px-8 py-5'>
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-new-accent  text-new-dark text-xs font-bold rounded-full mb-4">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-new-dark tracking-tighter leading-tight mb-4">
                            Contact Us
                        </h2>
                    </div>

                    {/* Form */}
                    <Card className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#e5e5e5]">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-new-dark font-medium flex items-center gap-2">
                                                    <User size={16} className="text-new-neutral" />
                                                    First Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="John"
                                                        {...field}
                                                        className="h-12 border-[#e5e5e5] focus:border-new-dark focus:ring-new-accent rounded-xl"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-new-dark font-medium flex items-center gap-2">
                                                    <User size={16} className="text-new-neutral" />
                                                    Last Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Doe"
                                                        {...field}
                                                        className="h-12 border-[#e5e5e5] focus:border-new-dark focus:ring-new-accent rounded-xl"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Contact Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-new-dark font-medium flex items-center gap-2">
                                                    <Mail size={16} className="text-new-neutral" />
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        {...field}
                                                        className="h-12 border-[#e5e5e5] focus:border-new-dark focus:ring-new-accent rounded-xl"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-new-dark font-medium flex items-center gap-2">
                                                    <Phone size={16} className="text-new-neutral" />
                                                    Phone <span className="text-[#9a9a9a] font-normal">(Optional)</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder="+1 (555) 000-0000"
                                                        {...field}
                                                        className="h-12 border-[#e5e5e5] focus:border-new-dark focus:ring-new-accent rounded-xl"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm" />
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
                                            <FormLabel className="text-new-dark font-medium flex items-center gap-2">
                                                <MessageSquare size={16} className="text-new-neutral" />
                                                Subject
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Project Inquiry"
                                                    {...field}
                                                    className="h-12 border-[#e5e5e5] focus:border-new-dark focus:ring-new-accent rounded-xl"
                                                />
                                            </FormControl>
                                            <FormDescription className="text-[#9a9a9a] text-xs">
                                                Briefly describe what your message is about.
                                            </FormDescription>
                                            <FormMessage className="text-red-500 text-sm" />
                                        </FormItem>
                                    )}
                                />

                                {/* Message */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-new-dark font-medium flex items-center gap-2">
                                                <MessageSquare size={16} className="text-new-neutral" />
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project, goals, and timeline..."
                                                    {...field}
                                                    className="min-h-[150px] border-[#e5e5e5] focus:border-new-dark focus:ring-new-accent rounded-xl resize-none"
                                                />
                                            </FormControl>
                                            <FormDescription className="text-[#9a9a9a] text-xs">
                                                Minimum 10 characters required.
                                            </FormDescription>
                                            <FormMessage className="text-red-500 text-sm" />
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className={cn(
                                            "w-full h-14 bg-new-dark hover:bg-[#2d2d2d] text-white rounded-xl font-medium text-base",
                                            "transition-all duration-300 hover:shadow-lg hover:shadow-new-dark/20",
                                            "flex items-center justify-center gap-2"
                                        )}
                                    >
                                        <Send size={18} />
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ContactForm