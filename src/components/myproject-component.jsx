import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {
    BellIcon,
    CodepenIcon,
    CpuIcon,
    DatabaseIcon,
    FastForwardIcon,
    NetworkIcon,
    SquareMIcon,
    TypeIcon,
    WindIcon
} from "lucide-react";

export default function MyprojectComponent() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </div>
    );
}

const projects = [
    {
        title: "Todo App",
        description: "A simple and intuitive todo list application built with React, Node.js, and MongoDB.",
        technologies: ["React", "Node.js", "MongoDB"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "E-commerce Website",
        description: "A full-featured e-commerce website built with React, Node.js, and a headless CMS.",
        technologies: ["React", "Node.js", "Headless CMS"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "Blog Platform",
        description: "A modern blog platform built with Next.js, TypeScript, and a headless CMS.",
        technologies: ["Next.js", "TypeScript", "Headless CMS"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "Personal Website",
        description: "My personal website built with Next.js, Tailwind CSS, and Vercel.",
        technologies: ["Next.js", "Tailwind CSS", "Vercel"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "Fitness Tracker",
        description: "A fitness tracking application built with React, Node.js, and a real-time database.",
        technologies: ["React", "Node.js", "Real-time Database"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "Chatbot Application",
        description: "A conversational chatbot application built with React, Node.js, and a machine learning model.",
        technologies: ["React", "Node.js", "Machine Learning"],
        liveDemoLink: "#",
        githubLink: "#",
    },
];

function ProjectCard({project}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    {project.technologies.map((tech, index) => (
                        <TechIcon key={index} tech={tech}/>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex gap-2">
                    <LinkButton href={project.liveDemoLink} className="bg-primary" label="Live Demo"/>
                    <LinkButton href={project.githubLink} className="border border-input" label="GitHub"/>
                </div>
            </CardFooter>
        </Card>
    );
}

function TechIcon({tech}) {
    const icons = {
        "React": <CodepenIcon className="w-3 h-3 mr-1"/>,
        "Node.js": <NetworkIcon className="w-3 h-3 mr-1"/>,
        "MongoDB": <DatabaseIcon className="w-3 h-3 mr-1"/>,
        "Headless CMS": <CpuIcon className="w-3 h-3 mr-1"/>,
        "Next.js": <FastForwardIcon className="w-3 h-3 mr-1"/>,
        "TypeScript": <TypeIcon className="w-3 h-3 mr-1"/>,
        "Tailwind CSS": <WindIcon className="w-3 h-3 mr-1"/>,
        "Vercel": <BellIcon className="w-3 h-3 mr-1"/>,
        "Real-time Database": <DatabaseIcon className="w-3 h-3 mr-1"/>,
        "Machine Learning": <SquareMIcon className="w-3 h-3 mr-1"/>,
    };

    return (
        <div className="flex items-center">
            {icons[tech]}
            {tech}
        </div>
    );
}

function LinkButton({href, className, label}) {
    return (
        <Link
            href={href}
            className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors ${className} hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
            prefetch={false}
        >
            {label}
        </Link>
    );
}

// Icon components remain unchanged
// BellIcon, CodepenIcon, CpuIcon, DatabaseIcon, FastForwardIcon, NetworkIcon, SquareMIcon, TypeIcon, WindIcon
