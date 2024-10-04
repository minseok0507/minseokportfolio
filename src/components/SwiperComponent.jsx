import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// 스타일 추가
import swiperStyle from './SwiperComponent.css';
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Autoplay} from "swiper/modules"; // CSS 파일을 따로 만들어서 스타일 적용

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


    return (
            <Swiper
                spaceBetween={30}
                grabCursor={true}
                // freeMode={true}
                loop={true}
                slidesPerView={slidesPerView}
                speed={2000}
                centeredSlides={true}
                autoplay={{
                    delay: 200,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {["JavaScript", "React", "Node.js", "NextJs", "Spring", "NCP", "Docker"].map((skill) => (
                    <SwiperSlide key={"slider-" + skill}>
                        <Card key={"card-" + skill}>
                            <CardHeader>
                                <CardTitle>{skill}</CardTitle>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default SwiperComponent;
