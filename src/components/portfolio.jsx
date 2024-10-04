'use client'

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Github, Linkedin, Mail, Twitter} from "lucide-react"

import SwiperComponent from "@/components/SwiperComponent";

export function PortfolioComponent() {
    return (
        (<div
            className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <header className="bg-white dark:bg-gray-800 shadow">
                <div
                    className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"/>

                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                        </svg>
                    </label>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Minseok Jeong</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a
                                href="#about"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
                            </li>
                            <li><a
                                href="#skills"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</a>
                            </li>
                            <li><a
                                href="#projects"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a>
                            </li>
                            <li><a
                                href="#contact"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="max-w-7xl mx-auto p-6 sm:px-6 lg:px-8">
                <section id="about" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
                    <div className="flex justify-between">
                        <p className="text-gray-600 dark:text-gray-300 pr-5">
                            안녕하세요! 저는 웹 퍼블리셔 과정을 거쳐 컴퓨터공학을 전공한 풀스택 웹 개발자 <strong>정민석</strong> 입니다. <br/>
                            부트캠프에서 Java와 React를 활용해 협력 프로젝트를 성공적으로 수행하며 경험을 쌓았습니다. <br/>
                            사용자 중심의 서비스를 제공하기 위해 항상 노력하며, 다양한 경험을 통해 성장하고 있습니다.
                        </p>
                        <img
                            className="rounded-xl shadow"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "2019년 포트폴리오",
                                description: "HTML CSS JavaScript Jquery",
                                link: "#"
                            },
                            {
                                title: "개인 프로젝트 캘린더",
                                description: "JSP",
                                link: "#"
                            },
                            {
                                title: "2인 프로젝트 블로그",
                                description: "HTML CSS JavaScript Jquery",
                                link: "#"
                            },
                            {
                                title: "프로젝트 판다",
                                description: "스프링 프레임워크 JSP myBatis",
                                link: "#"
                            },
                            {
                                title: "조선팔도 보드게임",
                                description: "NextJs Spring boot websocket",
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
            <footer className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 dark:text-gray-400">© 2024 Minseok Jeong. All rights
                        reserved.</p>
                </div>
            </footer>
        </div>)
    );
}