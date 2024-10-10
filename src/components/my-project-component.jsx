import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {
    Atom,
    Cloud,
    Coffee,
    Container,
    DatabaseIcon,
    FastForwardIcon,
    FileCode2,
    Hexagon,
    Leaf,
    Rss,
    Scroll,
    Server,
    Shield,
    Twitter,
    Unplug,
    WindIcon,
    Youtube
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
        description: "웹 퍼블리셔 과정 마지막에 만든 포트폴리오입니다.",
        technologies: ["HTML", "CSS", "JavaScript", "Jquery"],
        liveDemoLink: "#",
        githubLink: "#",
        pjTerm: "2019.11~2020.01",
        thumbnail: "https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/2019portfolio.png",
    },
    {
        title: "미니 프로젝트 캘린더",
        description: "JAVA 수업이 마무리될 즈음, JSP와 JDBC를 활용한 프로젝트 주제를 선택하여 진행했습니다.",
        technologies: ["JSP", "JDBC", "HTML", "CSS", "JavaScript"],
        liveDemoLink: "#",
        githubLink: "#",
        pjTerm: "2024.05.03~2024.05.07",
        thumbnail: "https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/parsoner.png",
        pdf: "#",
    },
    {
        title: "2인 프로젝트 블로그",
        description: "세미 프로젝트를 시작하기에 앞서, 깃과 깃허브를 연습하기 위해 2인 팀으로 프로젝트를 진행합니다. 일주일 안에 완성할 수 있는 주제로 블로그 프로젝트를 선택했습니다.",
        technologies: ["JSP", "Spring", "MyBatis", "Tailwind CSS", "Jenkins"],
        liveDemoLink: "#",
        githubLink: "https://github.com/gratisreise/teamprojecttest",
        pjTerm: "2024.05.31~2024.06.04",
        thumbnail: "https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/team.png",
        pdf: "#",
    },
    {
        title: "세미 프로젝트 판다",
        description: "중고물품을 목적지를 확인한 후, 채팅을 통해 거래 할 수 있는 중고거래 플렛폼입니다.",
        technologies: ["JSP", "Spring", "MyBatis", "Tailwind CSS", "WebSocket", "Jenkins"],
        liveDemoLink: "#",
        githubLink: "https://github.com/minseok0507/semi-project-panda",
        pjTerm: "2024.06.04~2024.07.02",
        thumbnail: "https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/panda.png",

        infoVideo: "https://www.youtube.com/watch?v=jMFjW18qeZ4",
        pdf: "#",
    },
    {
        title: "조선팔도 보드게임",
        description: "조선의 팔도를 테마로 한 모노폴리와 윷놀이를 결합한 보드게임입니다.",
        technologies: ["Next.js", "Spring", "JPA", "Tailwind CSS", "Node.js", "WebSocket", "NCP", "Docker"],
        liveDemoLink: "#",
        githubLink: "https://github.com/Joseonpaldo",
        pjTerm: "2024.07.15~2024.09.20",
        thumbnail: "https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/game.png",

        infoVideo: "https://www.youtube.com/watch?v=jxF3JOLMpdw",
        pdf: "#",
    },
    {
        title: "2024 포트폴리오",
        description: "A conversational chatbot application built with React, Node.js, and a machine learning model.",
        technologies: ["Next.js", "Tailwind CSS", "Docker"],
        liveDemoLink: "#",
        githubLink: "https://github.com/minseok0507/minseokportfolio",
        pjTerm: "2024.10.03~",
        thumbnail: "https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/2024portfolio.png",
    },
];

function ProjectCard({project}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <div className="flex w-full h-52 justify-center">
                <img src={project.thumbnail} alt="" height="100%"/>
            </div>
            <CardDescription className="px-4 py-2">{project.description}</CardDescription>
            <CardContent>
                <div className="flex-wrap flex gap-x-4 text-sm text-muted-foreground">
                    {project.technologies.map((tech, index) => (
                        <TechIcon key={index} tech={tech}/>
                    ))}
                </div>
            </CardContent>
            <div className="px-6 pb-2 text-left text-sm text-muted-foreground">{project.pjTerm}</div>
            <CardFooter>
                <div className="flex gap-2 items-center">
                    <LinkButton href={project.liveDemoLink}
                                className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-500 text-white dark:text-gray-900"
                                label="Live Demo"/>
                    <LinkButton href={project.githubLink}
                                className="border border-input dark:bg-gray-700 hover:text-white dark:hover:text-black dark:hover:bg-gray-400"
                                label="GitHub"/>
                    {project.infoVideo ? <a href={project.infoVideo} className="text-xs dark:text-gray-300"
                                            target="_blank"><Youtube/></a> : null}
                </div>
            </CardFooter>
        </Card>
    );
}

function TechIcon({tech}) {
    const icons = {
        "HTML": <FileCode2 className="w-3 h-3 mr-1"/>,
        "CSS": <Shield className="w-3 h-3 mr-1"/>,
        "JSP": <Coffee className="w-3 h-3 mr-1"/>,
        "MyBatis": <Twitter className="w-3 h-3 mr-1"/>,
        "JavaScript": <Scroll className="w-3 h-3 mr-1"/>,
        "Jquery": <Rss className="w-3 h-3 mr-1"/>,
        "React": <Atom className="w-3 h-3 mr-1"/>,
        "Spring": <Leaf className="w-3 h-3 mr-1"/>,
        "Node.js": <Hexagon className="w-3 h-3 mr-1"/>,
        "Next.js": <FastForwardIcon className="w-3 h-3 mr-1"/>,
        "Tailwind CSS": <WindIcon className="w-3 h-3 mr-1"/>,
        "JDBC": <DatabaseIcon className="w-3 h-3 mr-1"/>,
        "JPA": <DatabaseIcon className="w-3 h-3 mr-1"/>,
        "Docker": <Container className="w-3 h-3 mr-1"/>,
        "Jenkins": <Server className="w-3 h-3 mr-1"/>,
        "WebSocket": <Unplug className="w-3 h-3 mr-1"/>,
        "NCP": <Cloud className="w-3 h-3 mr-1"/>,
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
            target="_blank"
        >
            {label}
        </Link>
    );
}

// Icon components remain unchanged
// BellIcon, CodepenIcon, CpuIcon, DatabaseIcon, FastForwardIcon, NetworkIcon, SquareMIcon, TypeIcon, WindIcon
