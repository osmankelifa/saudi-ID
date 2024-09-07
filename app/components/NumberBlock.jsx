import Image from "next/image";

export default function NumbersBlock() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative">
        {/* SVG Background with Image Clipping */}
        <svg
          width="100%"
          height="400px"
          viewBox="0 0 1600 400"
          className="absolute -top-28 left-0 z-0"
        >
          <defs>
            <linearGradient id="PSgrad_03" x1="80.279%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Debugging: Remove clipPath to ensure image renders */}

          {/* Shape Overlay with Gradient */}
          <path
            fill="url(#PSgrad_03)"
            d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 
              L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 
              138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"
            // Adjust opacity to make the image more visible
          />
        </svg>

        {/* Numbers and Text */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-12">
          <div className="text-white">
            <h3 className="text-7xl font-bold">125</h3>
            <p className="text-lg">Active Projects</p>
          </div>
          <div className="text-white">
            <h3 className="text-7xl font-bold">200</h3>
            <p className="text-lg">Business Growth</p>
          </div>
          <div className="text-white">
            <h3 className="text-7xl font-bold">530</h3>
            <p className="text-lg">Completed Projects</p>
          </div>
          <div className="text-white">
            <h3 className="text-7xl font-bold">941</h3>
            <p className="text-lg">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
