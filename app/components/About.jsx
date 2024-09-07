import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 mb-8 lg:mt-20">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Explore The Services <br />
              We Offer For You
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Saudi-ID is a secure digital identity solution designed to
              simplify and protect your online interactions. Saudi-ID allows
              users to verify their identity online, ensuring safe access to a
              wide range of services, from banking and financial transactions to
              healthcare and government portals.
            </p>
          </div>

          {/* Right Column with Cards and Background SVG */}
          <div className="lg:w-2/3 relative">
            <svg
              id="bg-services"
              width="100%"
              viewBox="0 0 1000 800"
              className="absolute -left-[800px] inset-0 z-0"
            >
              <defs>
                <linearGradient
                  id="PSgrad_02"
                  x1="64.279%"
                  x2="0%"
                  y1="76.604%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(1,230,248)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="RGB(134, 239, 172)"
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                opacity="0.102"
                fill="url(#PSgrad_02)"
                d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/web-design.png"
                    alt="Web Design"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                <p className="text-gray-600">
                  Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                  eget.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/marketing.png"
                    alt="Marketing"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Marketing</h3>
                <p className="text-gray-600">
                  Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                  eget.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/seo.png"
                    alt="SEO"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">SEO</h3>
                <p className="text-gray-600">
                  Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                  eget.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/graphics-design.png"
                    alt="Graphics Design"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
                <p className="text-gray-600">
                  Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                  eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
