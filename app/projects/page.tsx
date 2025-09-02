"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Lumol – Ad-tech platform for conversational ads (Completed)",
    description: "Lumol is an ad-tech platform that connects advertisers with LLM providers for conversational ad placements. I designed the platform to be minimalist and modern, with light, mid, and dark mode themes. The interface emphasizes clarity, usability, and seamless navigation, ensuring advertisers and AI providers can collaborate efficiently.",
    role: "Head Designer",
    tools: ["Figma (UI/UX design)", "FigJam (flows and wireframes)", "Adobe Suite (visual assets)"],
    technologies: ["Next.js 14", "TypeScript", "React 18", "ESLint", "CSS"],
    view: " http://lumolai.com/", // Live website
    design: "https://www.figma.com/design/o3TCdkYVZZJ1xY0FVaGhK9/Lumol?node-id=1-2&t=G02dScOEyuEnR5Ht-1", // Add your design link here
  },
  {
    title: "FonuCX Dashboard – Customer experience analytics tool (Completed)",
    description: "A dashboard that tracks and visualizes data such as message volume, campaign engagement, sentiment analysis, and platform performance. It provides businesses with actionable insights into their customer interactions.",
    role: "UI/UX Designer",
    tools: ["Figma (UI/UX design)", "FigJam (flows and wireframes)", "Adobe Suite (visual assets)"],
    technologies: ["Node.js", "Express", "MongoDB"],
    design:"https://www.figma.com/design/286XlxfmMDFLehNlnZDjv8/FonuCX?node-id=111-10292&t=TeEUIjJY0OVwquBJ-1",
  },

  {
    title: "Vibecast – YouTube comment analysis dashboard (Ongoing)",
    description: "A creator-focused web app that analyzes YouTube comment data. It provides dashboards with sentiment breakdowns, trend charts, and insights into audience reactions—helping creators understand their community better. It also features an AI assistant, CastBot, for intelligent data insights.",
    role: "UI/UX Designer",
    tools: ["Figma (UI/UX design)", "FigJam (flows and wireframes)", "Adobe Suite (visual assets)"],
    technologies: ["Node.js", "Express", "MongoDB"],
    design:"https://www.figma.com/design/fcKH1Sebe12EH7yNdOuxj8/Vibecast?node-id=244-413&t=wJySFXbsta36BtXt-1",
  },

  {
    title: "Zance – Experimental interactive design project (Ongoing)",
    description: "A creative project exploring interactive and modern digital experiences. It focuses on sleek UI, minimal flows, and innovative layouts designed to enhance engagement. The project highlights my ability to experiment with bold design concepts while keeping usability in focus",
    role: "Lead UI/UX Designer",
    tools: ["Figma (UI/UX design)", "FigJam (flows and wireframes)"],
    technologies: ["Node.js", "Express", "MongoDB"],
    design:"https://www.figma.com/design/jgzs4IBMrTEuUsHJwxL6At/Zance?node-id=0-1&t=T53jHLvgDwTchHYl-1",
  },

  {
    title: "Internship Automation Web Application – Internship management system for NNPC (Not Completed)",
    description: "Developed during my internship at NNPC, this web app streamlined the management of internship applications and records. It allowed easier submission, tracking, and documentation, reducing manual workload for HR and admins.",
    role: "Frontend Intern Developer",
    tools: ["React.js", "Vite-React", "Tailwind CSS", "Material UI", "Shadcn UI", "Swagger (For API documentation)"],
    technologies: ["Node.js", "Express", "MongoDB"],

  },

    {
    title: "OmniRelay – Integration dashboard for APIs (Ongoing – New Project)",
    description: "A web platform designed to centralize access to different integrations. It enables users to log in, configure APIs, and access documentation seamlessly from a single dashboard, removing the need to jump between multiple tools.",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "FigJam"],
    technologies: ["Node.js", "Express", "MongoDB"],
    design:"https://www.figma.com/design/fFR8PxE8AlCidAcqx7uF0T/Omni-Relay?node-id=0-1&t=do6gdhbfpDonE7Ej-1",
  },
]

export default function Projects() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold ml-5">Projects</h1>
        {projects.map((project, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <div className="mt-4">
                <span className="font-semibold">Role:</span> {project.role}
              </div>
              <div className="mt-2">
                <span className="font-semibold">Tools Used:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tools.map((tool, idx) => (
                    <Badge key={idx}>{tool}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 justify-end">
              <a
                href={project.design ? project.design : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={project.design ? "outline" : "outline"} disabled={!project.design}>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Design
                </Button>
              </a>
              {index === 4 ? (
                <Button variant="default" disabled>
                  <ExternalLink className="mr-2 h-4 w-4" /> Not Available
                </Button>
              ) : (
                project.view && (
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live Website
                    </Button>
                  </a>
                )
              )}
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}