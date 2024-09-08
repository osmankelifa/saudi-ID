"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

// Dynamically import 'react-slick' to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// TestimonialCard Component
const TestimonialCard = ({ name, job, image, text }) => (
  <div className="bg-white  shadow-lg min-h-[350px] rounded-lg p-6 text-center">
    <Image
      src={image}
      alt={name}
      width={100}
      height={100}
      className="rounded-full mx-auto mb-4"
    />
    <h5 className="text-xl font-semibold">{name}</h5>
    <span className="block text-gray-500 mb-4">{job}</span>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Data for testimonials
  const testimonials = [
    {
      name: "Sahra Ahmed",
      job: "Human Resources",
      image: "/images/sahra.png", // Ensure the correct image file name and extension
      text: "Saudi-ID has been instrumental in simplifying our business operations. Best thing is  it's user-friendly interface, I highly recommend it for any organization looking to streamline their identity verification process.",
    },
    {
      name: "Ibrahim Mohammed",
      job: "Project Manager",
      image: "/images/abu.png",
      text: "Using Saudi-ID has transformed the way we handle our identity verification processes. It's fast, secure, and incredibly easy to integrate. I would recommend it to any business looking for a seamless digital solution.",
    },
    {
      name: "Fatima Saeed",
      job: "Marketing Manager",
      image: "/images/fatima.png",
      text: "Saudi-ID has revolutionized our marketing team's ability to securely and efficiently manage client identities. Its user-friendly interface and advanced security features have provided us with the confidence we need to handle sensitive data with ease.",
    },
  ];

  // Only render the component on the client side
  if (!mounted) return null;

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What our customers say about us.
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              job={testimonial.job}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
