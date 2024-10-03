'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function PortfolioComponent() {
  return (
    (<div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div
          className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Jane Doe</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a
                href="#about"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a></li>
              <li><a
                href="#skills"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</a></li>
              <li><a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a></li>
              <li><a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a passionate full-stack web developer with 5 years of experience in creating robust and scalable web applications. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["JavaScript", "React", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Docker"].map((skill) => (
              <Card key={skill}>
                <CardHeader>
                  <CardTitle>{skill}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Platform",
                description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
                link: "#"
              },
              {
                title: "Task Management App",
                description: "A Kanban-style task management application built with React and Django.",
                link: "#"
              },
              {
                title: "Real-time Chat Application",
                description: "A real-time chat app using Socket.io, React, and Node.js.",
                link: "#"
              }
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <a href="mailto:jane.doe@example.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a
                href="https://github.com/janedoe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a
                href="https://linkedin.com/in/janedoe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a
                href="https://twitter.com/janedoe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">© 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}