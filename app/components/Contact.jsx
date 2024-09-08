"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    // Clear form after submission
    e.target.reset();
  };

  return (
    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" id="contact">
      <h4 className="text-xl font-bold mb-6">Contact Us</h4>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          className="w-full p-3 mb-4 text-gray-900 rounded-md"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="user_email"
          className="w-full p-3 mb-4 text-gray-900 rounded-md"
          placeholder="Email Address"
          required
        />
        <textarea
          name="message"
          className="w-full p-3 mb-4 text-gray-900 rounded-md"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Send Message <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
