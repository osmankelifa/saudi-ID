import Image from "next/image";

export default function LogoArea() {
  const logos = [
    { src: "/images/logo1.png", alt: "Logo 1" },
    { src: "/images/logo2.png", alt: "Logo 2" },
    { src: "/images/logo3.png", alt: "Logo 3" },
    { src: "/images/logo4.png", alt: "Logo 4" },
    { src: "/images/logo5.png", alt: "Logo 5" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
