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

export default function MyProjectComponent() {
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
        title: "2019 포트폴리오",
        description: "A simple and intuitive todo list application built with React, Node.js, and MongoDB.",
        technologies: ["React", "Node.js", "MongoDB", "MongoDB", "MongoDB", "MongoDB", "MongoDB", "MongoDB", "MongoDB", "MongoDB"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "미니 프로젝트 캘린더",
        description: "JAVA 수업이 마무리될 즈음, JSP와 JDBC를 활용한 프로젝트 주제를 선택하여 진행했습니다.",
        technologies: ["React", "Node.js", "Headless CMS"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "2인 프로젝트 블로그",
        description: "세미 프로젝트를 시작하기에 앞서, 깃과 깃허브를 연습하기 위해 2인 팀으로 프로젝트를 진행합니다. 일주일 안에 완성할 수 있는 주제로 블로그 프로젝트를 선택했습니다.",
        technologies: ["Next.js", "TypeScript", "Headless CMS"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "세미 프로젝트 판다",
        description: "중고물품을 목적지를 확인한 후, 채팅을 통해 거래 할 수 있는 중고거래 플렛폼입니다.",
        technologies: ["Next.js", "Tailwind CSS", "Vercel"],
        liveDemoLink: "#",
        githubLink: "https://github.com/minseok0507/PandaProject",
    },
    {
        title: "조선팔도 보드게임",
        description: "조선의 팔도를 테마로 한 모노폴리와 윷놀이를 결합한 보드게임입니다.",
        technologies: ["React", "Node.js", "Real-time Database"],
        liveDemoLink: "#",
        githubLink: "#",
    },
    {
        title: "2024 포트폴리오",
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
                    <LinkButton href={project.liveDemoLink} className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-500 dark:hover:bg-gray-500 text-white dark:text-gray-900" label="Live Demo"/>
                    <LinkButton href={project.githubLink} className="border border-input hover:text-white dark:hover:text-black" label="GitHub"/>
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
