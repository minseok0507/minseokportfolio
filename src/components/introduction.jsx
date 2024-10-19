import React from 'react';

const Introduction = () => {
    return (
        <section id="introduction" className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-[1fr_260px] grid-cols-[1fr_0px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm
                                Minseok Jeong</h1>
                            <p className=" text-muted-foreground md:text-xl">
                                안녕하세요! 저는 웹 퍼블리셔 과정을 거쳐 컴퓨터공학을 전공한 풀스택 웹 개발자 <strong>정민석</strong> 입니다. <br/>
                                부트캠프에서 Java와 React를 활용해 협력 프로젝트를 성공적으로 수행하며 경험을 쌓았습니다. <br/>
                                사용자 중심의 서비스를 제공하기 위해 항상 노력하며, 다양한 경험을 통해 성장하고 있습니다.
                            </p>
                        </div>
                    </div>
                    <img
                        className="rounded-xl shadow"
                        src="/image/minseok.jpg"
                        alt=""
                        style={{
                            width: 200 * 1.3,
                            height: 267 * 1.3
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
