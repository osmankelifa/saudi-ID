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
      navigation
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
        <div className="w-full grid grid-cols-2 h-[70vh] bg-green-300">
          <div className="flex flex-col items-start pl-40 justify-center">
            <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-green-500">Saudi-ID</span>
            </h1>
            <p className="mb-6 text-xl text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 ease-in-out shadow-lg"
            >
              Learn More
            </a>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/images/kufiya.png"
              alt="Image 3"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 - Enlarged Image with better alignment */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 h-[70vh] bg-green-300">
          <div className="flex flex-col items-start pl-40 justify-center">
            <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-blue-200">Saudi-ID</span>
            </h1>
            <p className="mb-6 text-xl text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 ease-in-out shadow-lg"
            >
              Learn More
            </a>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/girl.png"
              alt="Image 4"
              fill
              loading="eager"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 h-[70vh] bg-green-300">
          <div className="flex flex-col items-start pl-40 justify-center">
            <h1 className="text-5xl font-bold mb-4">
              Unlock Your <br /> Future with Saudi-ID
            </h1>
            <p className="mb-6 text-2xl">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200"
            >
              Learn More
            </a>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/hijab.png"
              alt="Image 1"
              fill
              loading="eager"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 h-[70vh] bg-green-300">
          <div className="flex flex-col items-start pl-40 justify-center">
            <h1 className="text-5xl font-bold mb-4">
              Unlock Your <br /> Future with Saudi-ID
            </h1>
            <p className="mb-6 text-2xl">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200"
            >
              Learn More
            </a>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/green.png"
              alt="Image 4"
              fill
              loading="eager"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
