"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
            <Image
              src="/img/meeee.jpeg"
              alt="Profile picture"
              width={200}
              height={200}
              className="rounded-full object-cover border-4 border-grey h-32 w-32 md:h-40 md:w-40"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-primary">Obaridormuru</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
a UI/UX Designer passionate about creating intuitive, user-friendly, and visually engaging digital experiences that simplify complex ideas.        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4"
      >
        <Link href="/projects">
          <Button size="lg">View Projects</Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

