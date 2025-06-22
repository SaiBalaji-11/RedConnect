import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const api = import.meta.env.VITE_API_URL;

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', username: '', password: '', confirmPassword: '',
    age: '', bloodGroup: '', alcohol: '', smoker: '', city: '',
    address: '', state: '', phone: '', image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await axios.post(`${api}/signup`, data);
      if (res.status === 201) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-red-400 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-xl space-y-5 mt-10"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Create Your Account</h2>

        {/* Standard Fields */}
        {[
          { label: "Full Name", name: "name" },
          { label: "Username[Length>4]", name: "username" },
          { label: "Password[length>6]", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Age[Limit:18-65]", name: "age", type: "number" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="flex flex-col">
            <label className="text-blue-900 font-medium mb-1">{label}</label>
            <input
              name={name}
              type={type}
              required
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        ))}

        {/* Blood Group */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="p-2 border rounded"
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
        </div>

        {/* Other Fields */}
        {[
          { label: "City", name: "city" },
          { label: "Address", name: "address" },
          { label: "State", name: "state" },
          { label: "Phone[10 Digits]", name: "phone", type: "tel" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="flex flex-col">
            <label className="text-blue-900 font-medium mb-1">{label}</label>
            <input
              name={name}
              type={type}
              required
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        ))}

        {/* Alcohol */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Alcohol</label>
          <select name="alcohol" onChange={handleChange} required className="p-2 border rounded">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Smoker */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Smoker</label>
          <select name="smoker" onChange={handleChange} required className="p-2 border rounded">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Upload Image</label>
          <button><input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="p-2"
          />
          </button>
        </div>

        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}
