import React from "react";

const Contact = () => {
  return (
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
          Send Message <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </form>
    </div>
  );
};

export default Contact;
