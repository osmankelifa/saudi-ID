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
          <div className="flex  flex-col lg:pt-0 pt-52 md:pl-40 justify-center z-10 ">
            <h1 className="text-4xl backdrop-blur-md  md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-green-500">Saudi-ID</span>
            </h1>
            <p className=" text-lg backdrop-blur-md  md:text-xl  text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
          </div>
          {/* Image - Hidden on mobile, visible on desktop */}
          <div className="absolute md:relative w-[250px]  md:w-[350px] h-full top-0 left-24  md:left-52 z-0 md:z-auto">
            <Image
              src="/images/kufiya.png"
              alt="Image 4"
              fill
              className="object-contain object-bottom md:block hidden"
            />
            <Image
              src="/images/kufiya.png"
              alt="Image 4"
              fill
              className="object-cover object-bottom opacity-50 md:block hidden"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 2 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex  flex-col lg:pt-0 pt-52 md:pl-40 justify-center z-10 ">
            <h1 className="text-4xl backdrop-blur-md  md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-green-500">Saudi-ID</span>
            </h1>
            <p className=" text-lg backdrop-blur-md  md:text-xl  text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
          </div>

          <div className="absolute md:relative w-full h-full top-0 left-0 z-0 md:z-auto">
            <Image
              src="/images/girl.png"
              alt="Image 4"
              fill
              className="object-contain object-bottom md:block hidden"
            />
            <Image
              src="/images/girl.png"
              alt="Image 4"
              fill
              className="object-cover object-bottom opacity-50 md:hidden"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex  flex-col lg:pt-0 pt-52 md:pl-40 justify-center z-10 ">
            <h1 className="text-4xl backdrop-blur-md  md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-green-500">Saudi-ID</span>
            </h1>
            <p className=" text-lg backdrop-blur-md  md:text-xl  text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
          </div>
          <div className="absolute md:relative w-[300px]  md:w-[450px] h-full top-0 left-10 md:left-28 z-0 md:z-auto">
            <Image
              src="/images/hijab.png"
              alt="Image 4"
              fill
              className="object-contain  object-bottom md:block hidden"
            />
            <Image
              src="/images/hijab.png"
              alt="Image 4"
              fill
              className="object-cover object-bottom opacity-50 md:block hidden"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 4 */}
      <SwiperSlide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh] bg-green-300">
          <div className="flex  flex-col lg:pt-0 pt-52 md:pl-40 justify-center z-10 ">
            <h1 className="text-4xl backdrop-blur-md  md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Unlock Your <br /> Future with{" "}
              <span className="text-green-500">Saudi-ID</span>
            </h1>
            <p className=" text-lg backdrop-blur-md  md:text-xl  text-white/90 leading-relaxed">
              A seamless solution for your daily life. <br /> Elevate your
              identity verification with the most advanced technology.
            </p>
          </div>

          <div className="absolute md:relative w-[300px]  md:w-[500px] h-full top-0 left-10 z-0 md:z-auto">
            <Image
              src="/images/green2.png"
              alt="Image 4"
              fill
              className="object-contain object-bottom md:block hidden"
            />
            <Image
              src="/images/green2.png"
              alt="Image 4"
              fill
              className="object-cover object-bottom opacity-50 md:block hidden"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
