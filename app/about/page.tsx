"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const frontendskills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
]

const uiuxSkills = [
  "Wireframing",
  "Prototyping",
  "Typography",
  "Color Theory",
  "User Research",
  "Usability Testing",
  "Interaction Design",
]

const generalSkills = [
  "Problem-Solving",
  "Creativity",
  "Communication",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
]

const tools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "InVision",
  "Photoshop",
  "Illustrator",
]

export default function About() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold ml-5">About Me</h1>
        <Card>
          <CardContent className="prose prose-gray dark:prose-invert p-6">
            <p>Hello!, I'm Ojinga-Ochindo Obaridormuru, a passionate UI/UX Designer dedicated to crafting intuitive and visually engaging digital experiences. I thrive on turning complex ideas into simple, user-friendly interfaces that leave a lasting impression.</p>
            <p>
              Beyond the screen, I bring creativity to life through hand-drawing, where every sketch hones my attention to detail and design sensibilities. I’m also a dedicated gamer, constantly inspired by immersive storytelling and interactive design that fuel my approach to creating engaging user interfaces.
            </p>
            <p>
              Though I’ve come a long way, I see every project as an opportunity to grow, learn, and push the boundaries of what’s possible in Design. Let’s create something extraordinary together!
            </p>
            <div>
              <h2 className="text-xl font-semibold mt-6">UI/UX Design Skills</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {uiuxSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            <h2 className="text-xl font-semibold mt-6">Frontend Skills</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {frontendskills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-6">General Skills</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {generalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-6">Tools</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {tools.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}