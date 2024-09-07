"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function NewsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const newsItems = [
    {
      image: "/images/news1.jpg",
      title: "Aenean ultrices lorem quis blandit tempor urabitur accumsan.",
      text: "Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue, et porta metus.",
      link: "#",
    },
    {
      image: "/images/news2.jpg",
      title: "Nam vel nisi eget odio pulvinar iaculis. Fusce aliquet.",
      text: "Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue, et porta metus.",
      link: "#",
    },
    {
      image: "/images/news3.jpg",
      title: "Morbi faucibus odio sollicitudin risus scelerisque dignissim.",
      text: "Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue, et porta metus.",
      link: "#",
    },
  ];

  return (
    <section id="news" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest News & Articles
        </h2>

        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-t-lg object-cover w-full"
                />
                <div className="p-4 text-left">
                  <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                  <p className="text-gray-600 mb-4">{item.text}</p>
                  <a href={item.link} className="text-blue-500 hover:underline">
                    READ MORE{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
