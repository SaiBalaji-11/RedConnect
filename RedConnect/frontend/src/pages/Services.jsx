import React from "react";
import { FaSignInAlt, FaUserPlus, FaHeartbeat, FaMedal } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen bg-white-100 p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-8 border-2 border-red-600">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">
          Our Services
        </h1>

        {/* Login & Signup Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            How to Login & Sign Up?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 border border-red-500 rounded-lg">
              <FaSignInAlt className="text-red-600 text-4xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Login
              </h3>
              <p className="text-gray-600 text-center">
                Use your registered email & password to log in securely.
              </p>
            </div>
            <div className="bg-blue-50 p-5 border border-red-500 rounded-lg">
              <FaUserPlus className="text-red-600 text-4xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Sign Up
              </h3>
              <p className="text-gray-600 text-center">
                Provide your details, including blood group, city, and state to register.
              </p>
            </div>
          </div>
        </div>

        {/* Blood Donation Process */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            How to Apply for Blood Donation?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click the <span className="text-red-600 font-semibold">"Apply Now"</span> button.</li>
            <li>Fill out the form with the required details.</li>
            <li>We will match you with donors of the same blood group & location.</li>
            <li>Contact the matching donors and save lives!</li>
          </ol>
        </div>

        {/* Ranking System */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Ranking System
          </h2>
          <div className="bg-blue-50 p-5 border border-red-500 rounded-lg text-center">
            <FaMedal className="text-red-600 text-5xl mx-auto mb-3" />
            <p className="text-gray-700">
              Donors who save more lives by donating blood will earn higher ranks and badges.
            </p>
          </div>
        </div>

        {/* About the Website */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            About Our Website
          </h2>
          <p className="text-gray-700">
            Our platform connects blood donors with people in need. We ensure a seamless and fast blood donation process.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <img src="https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg" alt="Blood Donation" className="rounded-lg shadow-md" />
            <img src="https://www.amritahospitals.org/_next/image?url=https%3A%2F%2Fadmin.amritahospitals.org%2Fsites%2Fdefault%2Ffiles%2F2023-05%2Fblood%2520donation.png&w=3840&q=100" alt="Hospital" className="rounded-lg shadow-md" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
