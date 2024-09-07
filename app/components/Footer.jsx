export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" id="gtco-footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Section */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" id="contact">
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <form>
              <input
                type="text"
                className="w-full p-3 mb-4 text-gray-900 rounded-md"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full p-3 mb-4 text-gray-900 rounded-md"
                placeholder="Email Address"
              />
              <textarea
                className="w-full p-3 mb-4 text-gray-900 rounded-md"
                placeholder="Message"
                rows="4"
              ></textarea>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Send Message{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </form>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap">
              {/* Company Section */}
              <div className="w-1/2 mb-8 lg:mb-0">
                <h4 className="text-xl font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Section */}
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
              </div>

              {/* Follow Us Section */}
              <div className="w-full mt-8">
                <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                <div className="space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    aria-label="Facebook"
                  >
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    aria-label="Twitter"
                  >
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    aria-label="Google"
                  >
                    <i className="fa fa-google fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin fa-lg"></i>
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
              href="/"
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
