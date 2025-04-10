import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100 p-6">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-2xl p-8 border-2 border-red-600">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Contact Us</h1>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-blue-50 border border-red-500 p-6 rounded-xl text-center">
            <FaPhoneAlt className="text-red-600 text-3xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-gray-700">Call Us</h2>
            <p className="text-gray-600">+91 9154175534</p>
          </div>

          {/* Email */}
          <div className="bg-blue-50 border border-red-500 p-6 rounded-xl text-center">
            <FaEnvelope className="text-red-600 text-3xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-gray-700">Email Us</h2>
            <p className="text-gray-600">support@blooddonation.com</p>
          </div>

          {/* Location */}
          <div className="bg-blue-50 border border-red-500 p-6 rounded-xl text-center">
            <FaMapMarkerAlt className="text-red-600 text-3xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-gray-700">Visit Us</h2>
            <p className="text-gray-600">Gandimaisamma,Dundigal,<br></br>Hyderbad,Telangana,<br/>India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
