import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {
    siCss3,
    siDocker, siHtml5,
    siJavascript, siLinux,
    siMysql,
    siNaver,
    siNextdotjs,
    siNodedotjs,
    siReact,
    siSocketdotio,
    siSpring
} from 'simple-icons';
import {Autoplay} from "swiper/modules";

const SwiperComponent = () => {
    const [slidesPerView, setSlidesPerView] = useState(5); // 기본값 설정

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(7); // lg 이상
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(5); // md 이상
            } else {
                setSlidesPerView(3); // sm 이하
            }
        };

        // 초기값 설정
        handleResize();

        // 리사이즈 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const skills = ["JavaScript", "React", "Node.js", "NextJs", "Spring", "JAVA", "MySQL", "NCP", "Docker" , "WebSocket"];
    const skills = [
        {skill: "HTML", icon: siHtml5},
        {skill: "CSS", icon: siCss3},
        {skill: "JavaScript", icon: siJavascript},
        {skill: "React", icon: siReact},
        {skill: "Node.js", icon: siNodedotjs},
        {skill: "Next.js", icon: siNextdotjs},
        {skill: "Spring", icon: siSpring},
        {skill: "Socket.io", icon: siSocketdotio},
        {skill: "MySQL", icon: siMysql},
        {skill: "NCP", icon: siNaver},
        {skill: "Docker", icon: siDocker},
        {skill: "Linux", icon: siLinux},

    ];

    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    };
    const rgbToHex = (r, g, b) => {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    };
    const darkenColor = (hex, amount) => {
        const { r, g, b } = hexToRgb(hex);
        const darkenedR = Math.max(0, r - amount);
        const darkenedG = Math.max(0, g - amount);
        const darkenedB = Math.max(0, b - amount);
        return rgbToHex(darkenedR, darkenedG, darkenedB);
    };


    return (
        <Swiper
            spaceBetween={20}
            grabCursor={true}
            loop={true}
            slidesPerView={slidesPerView}
            speed={2000}
            centeredSlides={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }}
            modules={[Autoplay]}
        >
            {skills.map((skill) => (
                <SwiperSlide key={skill.skill}>
                    <Card style={{ backgroundColor: darkenColor(`#${skill.icon.hex}`, 10) }}>
                    <CardHeader>
                            <CardTitle
                                className="text-white flex items-center justify-center"
                                style={{
                                    textShadow: '1px 1px 1px #0000004f',
                                }}
                            >
                                <svg
                                    fill="white"
                                    style={{
                                        width: "26px",
                                        height: "26px",
                                        marginRight: "10px",
                                    }}
                                >
                                    <defs>
                                        <filter id="shadow2">
                                            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#0000004f"/>
                                        </filter>
                                    </defs>
                                    <path d={skill.icon.path} filter="url(#shadow2)"/>
                                </svg>

                                {skill.skill}
                            </CardTitle>
                    </CardHeader>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;
