"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      className="bg-green-300"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={{
        delay: 5000, // Delay between transitions in milliseconds (5000 = 5 seconds)
        disableOnInteraction: false, // Autoplay will not stop after interaction (like swiping manually)
      }}
      speed={1000} // Transition speed in milliseconds (1000 = 1 second)
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex flex-col items-start p-6 md:pl-40 justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-green-500">Saudi-ID</span>
            </h1>
            <p className="mb-6 text-lg md:text-xl text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
          </div>

          {/* Image - Hidden on mobile, visible on desktop */}
          <div className="relative w-[360px] -right-16 h-full hidden md:block">
            <div className="relative w-full  h-full ">
              <Image
                src="/images/kufiya.png"
                alt="Image 3"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 2 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex flex-col items-start p-6 md:pl-40 justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-blue-200">Saudi-ID</span>
            </h1>
            <p className="mb-6 text-lg md:text-xl text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
          </div>

          <div className="relative w-full h-full hidden md:block">
            <div className="relative w-full h-full max-w-[50%] max-h-[100%]">
              <Image
                src="/images/girl.png"
                alt="Image 4"
                fill
                loading="eager"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex flex-col items-start p-6 md:pl-40 justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Unlock Your <br /> Future with Saudi-ID
            </h1>
            <p className="mb-6 text-lg md:text-2xl">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification.
            </p>
          </div>

          <div className="relative w-[400px] -right-16 h-full hidden md:block">
            <div className="relative w-full  h-full ">
              <Image
                src="/images/hijab.png"
                alt="Image 1"
                fill
                loading="eager"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 4 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex flex-col items-start p-6 md:pl-40 justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Unlock Your <br /> Future with Saudi-ID
            </h1>
            <p className="mb-6 text-lg md:text-2xl">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification.
            </p>
          </div>

          <div className="relative w-full h-full hidden md:block">
            <div className="relative w-full h-full max-w-[100%] max-h-[100%]">
              <Image
                src="/images/green.png"
                alt="Image 4"
                fill
                loading="eager"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
