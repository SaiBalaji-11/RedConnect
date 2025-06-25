import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_API_URL;

const Application = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    requiredBloodGroup: "",
    requiredBloodUnit: "",
    paidStatus: "free",
    paidAmount: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/api/users/match`, {
        bloodGroup: formData.requiredBloodGroup,
        city: formData.city,
        state: formData.state,
      });
  
      navigate("/matching-results", { state: { matches: res.data } });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100 m-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Blood Donation Application
        </h2>

        <label className="block font-medium">Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border p-3 rounded w-full mb-4"
        />

        <label className="block font-medium">Your Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border p-3 rounded w-full mb-4"
        />

        <label className="block font-medium">Your Phone Number:</label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="border p-3 rounded w-full mb-4"
        />

        <label className="block font-medium">Select Blood Group:</label>
        <select
          name="requiredBloodGroup"
          value={formData.requiredBloodGroup}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4"
        >
          <option value="">-- Select --</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <label className="block font-medium">Required Blood Unit:</label>
        <input
          type="number"
          name="requiredBloodUnit"
          value={formData.requiredBloodUnit}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4"
        />

        <label className="block font-medium">Payment Type:</label>
        <div className="mb-4">
          <label className="mr-6">
            <input
              type="radio"
              name="paidStatus"
              value="free"
              onChange={handleChange}
              checked={formData.paidStatus === "free"}
              className="mr-2"
            />
            Free
          </label>
          <label>
            <input
              type="radio"
              name="paidStatus"
              value="paid"
              onChange={handleChange}
              checked={formData.paidStatus === "paid"}
              className="mr-2"
            />
            Paid
          </label>
        </div>

        {formData.paidStatus === "paid" && (
          <div>
            <label className="block font-medium">Enter Paid Amount:</label>
            <input
              type="number"
              name="paidAmount"
              value={formData.paidAmount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="border p-3 rounded w-full mb-4"
            />
          </div>
        )}

        <label className="block font-medium">Your Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          className="border p-3 rounded w-full mb-4"
        />

        <label className="block font-medium">Your District:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className="border p-3 rounded w-full mb-4"
        />

        <label className="block font-medium">Your State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state"
          className="border p-3 rounded w-full mb-6"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-5 rounded w-full hover:bg-blue-700 transition cursor-pointer"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default Application;
