import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import {Card, CardHeader, CardTitle} from "@/components/ui/card";

export default function Slider() {
    return (
        <>
            <Swiper
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                    enabled: true,
                    delay: 0,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                loopAddBlankSlides={true}
                slidesPerView={2}
                speed={200}
                loopAdditionalSlides={2}
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
        </>
    );
}
