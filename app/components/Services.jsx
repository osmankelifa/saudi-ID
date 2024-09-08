import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="h-[90dvh] mt-20 md:mt-0 flex items-center bg-white py-16"
    >
      <div className="container  mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Column: Image and SVG */}
        <div className="relative w-full lg:w-7/12 mb-8 lg:mb-0">
          <div className="relative">
            {/* Background SVG */}

            {/* Image with Clipping */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/learn-img.jpg"
                alt="Service Image"
                priority
                width={700}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text */}

        <div className="w-full lg:w-5/12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 sm:justify-center text-center md:text-start leading-tight drop-shadow-md">
            Revolutionize Your <span className="text-green-600">Identity</span>{" "}
            with <span className="text-green-500">Saudi-ID</span>
          </h1>
          <svg
            className="absolute lg:block hidden "
            viewBox="0 0 900 700"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient
                id="PSgrad_01"
                x1="64.279%"
                x2="0%"
                y1="76.604%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="RGB(134, 239, 172)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(29,62,222)"
                  stopOpacity="1"
                />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              opacity="0.102"
              fill="url(#PSgrad_01)"
              d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z"
            />
          </svg>
          <p className="text-gray-700 mb-4">
            Saudi-ID is more than just a verification tool it&apos;s a gateway
            to a more seamless, secure, and integrated digital lifestyle.
            Whether you&apos;re managing your business or safeguarding personal
            data, our advanced technology ensures that your identity is always
            protected. Streamline your daily activities, boost your efficiency,
            and stay ahead of the curve with the power of Saudi-ID at your
            fingertips.
          </p>

          {/* <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Learn More <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
}
