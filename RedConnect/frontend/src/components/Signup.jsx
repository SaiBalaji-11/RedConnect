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

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    setError(''); // clear previous errors if user changes something
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    const requiredFields = ['name', 'username', 'password', 'confirmPassword', 'age', 'bloodGroup', 'alcohol', 'smoker', 'city', 'address', 'state', 'phone', 'image'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill the ${field} field`);
        return;
      }
    }

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const res = await axios.post(`${api}/signup`, data);
      if (res.status === 201) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (err) {
      setError('Enter Valid Data or check if username already exists!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-red-400 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-xl space-y-5 mt-10"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Create Your Account</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg border border-red-300">
            {error}
          </div>
        )}

        {/* Standard Fields */}
        {[{ label: "Full Name", name: "name" },
          { label: "Username [min 4 chars]", name: "username" },
          { label: "Password [min 6 chars]", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Age [18–65]", name: "age", type: "number" }
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="flex flex-col">
            <label className="text-blue-900 font-medium mb-1">{label}</label>
            <input
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
        ))}

        {/* Select Fields */}
        {[{
          label: "Blood Group", name: "bloodGroup", options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
        }, {
          label: "Alcohol", name: "alcohol", options: ["yes", "no"]
        }, {
          label: "Smoker", name: "smoker", options: ["yes", "no"]
        }].map(({ label, name, options }) => (
          <div key={name} className="flex flex-col">
            <label className="text-blue-900 font-medium mb-1">{label}</label>
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="">-- Select --</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt.toUpperCase()}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Text Fields */}
        {["city", "address", "state", "phone"].map(name => (
          <div key={name} className="flex flex-col">
            <label className="text-blue-900 font-medium mb-1">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <input
              name={name}
              type={name === "phone" ? "tel" : "text"}
              value={formData[name]}
              onChange={handleChange}
              required
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        ))}

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Upload Image</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="p-2 bg-blue-600 text-white rounded-xl"
            required
          />
        </div>

        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 cursor-pointer">
          Sign Up
        </button>
      </form>
    </div>
  );
}
