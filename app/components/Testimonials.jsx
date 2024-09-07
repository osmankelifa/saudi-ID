"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

// Dynamically import 'react-slick' to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,

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

  // Only render the component on the client side
  if (!mounted) return null;

  return (
    <section className="bg-gray-100 py-12">
      <div className="container  mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What our customers say about us.
        </h2>

        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src="/images/customer1.jpg"
                alt="Customer 1"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold">Lisa Gally</h5>
              <span className="block text-gray-500 mb-4">Project Manager</span>
              <p className="text-gray-600">
                “Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.”
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src="/images/customer2.jpg"
                alt="Customer 2"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold">Missy Limana</h5>
              <span className="block text-gray-500 mb-4">Project Manager</span>
              <p className="text-gray-600">
                “Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.”
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src="/images/customer3.jpg"
                alt="Customer 3"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold">Aana Brown</h5>
              <span className="block text-gray-500 mb-4">Project Manager</span>
              <p className="text-gray-600">
                “Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.”
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
