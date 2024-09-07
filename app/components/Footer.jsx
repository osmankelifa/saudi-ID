import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" id="gtco-footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Section */}
          <Contact />
          {/* Links Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap">
              {/* Company Section */}
              <div className="w-1/2 mb-8 lg:mb-0">
                <h4 className="text-xl font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:underline">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Section
              <div className="w-1/2">
                <h4 className="text-xl font-bold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Graphics Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      App Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      SEO
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Analytic
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* Follow Us Section */}
              <div className="w-full mt-8">
                <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                <div className="space-x-10">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-white text-3xl"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-white text-3xl"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-white text-3xl"
                    aria-label="Google"
                  >
                    <i className="fab fa-google fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-white text-3xl"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>
            &copy; 2024. All Rights Reserved. Design by{" "}
            <a
              href="https://www.sheriff702.me"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Sheriff702
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
