'use client'

import {Button} from "@/components/ui/button"
import {Github, Mail} from "lucide-react"

import SwiperComponent from "@/components/SwiperComponent";
import {CoolNavBarJsx} from "@/components/cool-nav-bar";
import MyProjectComponent from "@/components/my-project-component";
import Introduction from "@/components/introduction";
import {useEffect, useRef, useState} from "react";
import FixedMenu from "@/components/fixed-menu";

export function PortfolioComponent() {
    console.log("PortfolioComponent");

    const headerRef = useRef(null);
    const [fixedMenu, setFixedMenu] = useState(0);
    const [fixedMenuDisplay, setFixedMenuDisplay] = useState("none");


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setFixedMenu(0)
                    setTimeout(() => setFixedMenuDisplay("none"), 300)
                } else {
                    setFixedMenuDisplay("grid")
                    setTimeout(() => setFixedMenu(1), 300)
                }
            });
        });

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        // 컴포넌트 언마운트 시 observer 해제
        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);
    return (
        (<div
            className="min-h-screen bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-800">
            <header id="home" className="bg-white dark:bg-gray-800 shadow" ref={headerRef}>
                <CoolNavBarJsx/>
            </header>
            <FixedMenu style={{opacity: fixedMenu, transition: '0.3s linear', display: fixedMenuDisplay}}/>
            <main className="max-w-7xl mx-auto p-6 sm:px-6 lg:px-8">
                <Introduction/>
                <section id="about" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
                    <div className="flex justify-between">
                        <div>
                            <ul className="steps steps-vertical md:">
                                <li className="step step-primary">Register</li>
                                <li className="step step-primary">Choose plan</li>
                                <li className="step">Purchase</li>
                                <li className="step">Receive Product</li>
                            </ul>
                        </div>

                        <img
                            className="rounded-xl shadow md:hidden"
                            src="https://raw.githubusercontent.com/minseok0507/minseokportfolio/refs/heads/main/src/image/minseok.jpg"
                            alt=""
                            style={{
                                width: 200,
                                height: 267
                            }}
                        />
                    </div>
                </section>

                <section id="skills" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h2>
                    <SwiperComponent/>
                </section>

                <section id="projects" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
                    {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
                    {/*    {[*/}
                    {/*        {*/}
                    {/*            title: "2019년 포트폴리오",*/}
                    {/*            description: "HTML CSS JavaScript Jquery",*/}
                    {/*            link: "#"*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            title: "개인 프로젝트 캘린더",*/}
                    {/*            description: "JSP",*/}
                    {/*            link: "#"*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            title: "2인 프로젝트 블로그",*/}
                    {/*            description: "HTML CSS JavaScript Jquery",*/}
                    {/*            link: "#"*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            title: "프로젝트 판다",*/}
                    {/*            description: "스프링 프레임워크 JSP myBatis",*/}
                    {/*            link: "#"*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            title: "조선팔도 보드게임",*/}
                    {/*            description: "NextJs Spring boot websocket",*/}
                    {/*            link: "#"*/}
                    {/*        }*/}
                    {/*    ].map((project, index) => (*/}
                    {/*        <Card key={index}>*/}
                    {/*            <CardHeader>*/}
                    {/*                <CardTitle>{project.title}</CardTitle>*/}
                    {/*                <CardDescription>{project.description}</CardDescription>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardContent>*/}
                    {/*                <Button asChild>*/}
                    {/*                    <a href={project.link}>View Project</a>*/}
                    {/*                </Button>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <MyProjectComponent/>
                </section>

                <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
                    <div className="flex space-x-4">
                        <Button variant="outline" size="icon">
                            <a href="mailto:jms8928@naver.com" aria-label="Email">
                                <Mail className="h-4 w-4"/>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon">
                            <a
                                href="https://github.com/minseok0507/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub">
                                <Github className="h-4 w-4"/>
                            </a>
                        </Button>
                    </div>
                </section>
            </main>
            <footer className="bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 dark:text-gray-400">© 2024 Minseok Jeong. All rights
                        reserved.</p>
                </div>
            </footer>
        </div>)
    );
}