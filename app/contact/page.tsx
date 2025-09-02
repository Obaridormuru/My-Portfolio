"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import emailjs from "emailjs-com"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty({ message: "Message is required" }),
})

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    // Send email to the developer
    emailjs.send(
      "service_rh5nph5", // Replace with your EmailJS service ID
      "template_2j88yhn", // Replace with your EmailJS template ID for developer
      {
        to_name: values.name,
        to_email: values.email,
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      },
      "waAo2hZgFIJ8ZeusI" // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text)
      toast.success("Message sent successfully!")
      form.reset()
      // Send confirmation email to the user
      return emailjs.send(
        "service_rh5nph5", // Replace with your EmailJS service ID
        "template_kabdb4q", // Replace with your EmailJS template ID for confirmation
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "waAo2hZgFIJ8ZeusI" // Replace with your EmailJS user ID
      )
    })
    .then((response) => {
      console.log("Confirmation email sent!", response.status, response.text)
      setMessageSent(true)
    })
    .catch((err) => {
      console.error("FAILED...", err)
      toast.error("Failed to send message. Please try again later.")
    })
  }

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl space-y-6"
      >
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Your message"
                      {...field}
                      className="w-full p-2 border rounded bg-black text-white"
                      style={{
                        background: "rgba(0,0,0,0.85)",
                        backdropFilter: "blur(4px)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                        border: "1px solid rgba(50,50,50,0.3)"
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           {messageSent && <p className="text-green-500">Message sent successfully!</p>}
            <Button type="submit">Send Message</Button>
          </form>
        </Form>
      </motion.div>
    </div>
  )
}