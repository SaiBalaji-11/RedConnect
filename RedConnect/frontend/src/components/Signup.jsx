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
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.username.trim() || formData.username.length <= 4) newErrors.username = 'Username must be >4 characters';
    if (!formData.password || formData.password.length <= 6) newErrors.password = 'Password must be >6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
    if (!formData.age || formData.age < 18 || formData.age > 65) newErrors.age = 'Age must be 18-65';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.alcohol) newErrors.alcohol = 'This field is required';
    if (!formData.smoker) newErrors.smoker = 'This field is required';
    if (!formData.image) newErrors.image = 'Image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined) {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await axios.post(`${api}/signup`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res.status === 201) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (err) {
      let errorMessage = 'Signup failed. Please try again.';
      if (err.response) {
        if (err.response.data && err.response.data.message) {
          errorMessage = err.response.data.message;
        } else if (err.response.status === 400) {
          errorMessage = 'Validation error. Please check your inputs.';
        } else if (err.response.status === 409) {
          errorMessage = 'Username already exists. Please choose another.';
        }
      }
      setServerError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-red-400 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-xl space-y-5 mt-10"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Create Your Account</h2>

        {serverError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {serverError}
          </div>
        )}

        {/* Standard Fields */}
        {[
          { label: "Full Name", name: "name" },
          { label: "Username[Length>4]", name: "username" },
          { label: "Password[Length>6]", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Age[Limit:18-65]", name: "age", type: "number" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="flex flex-col">
            <label className="text-blue-900 font-medium mb-1">{label}</label>
            <input
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              className={`p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                errors[name] ? 'border-red-500' : ''
              }`}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
          </div>
        ))}

        {/* Blood Group */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className={`p-2 border rounded ${errors.bloodGroup ? 'border-red-500' : ''}`}
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
          {errors.bloodGroup && <p className="text-red-500 text-sm mt-1">{errors.bloodGroup}</p>}
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
              value={formData[name]}
              onChange={handleChange}
              className={`p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                errors[name] ? 'border-red-500' : ''
              }`}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
          </div>
        ))}

        {/* Alcohol */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Alcohol</label>
          <select 
            name="alcohol" 
            value={formData.alcohol}
            onChange={handleChange}
            className={`p-2 border rounded ${errors.alcohol ? 'border-red-500' : ''}`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.alcohol && <p className="text-red-500 text-sm mt-1">{errors.alcohol}</p>}
        </div>

        {/* Smoker */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Smoker</label>
          <select 
            name="smoker" 
            value={formData.smoker}
            onChange={handleChange}
            className={`p-2 border rounded ${errors.smoker ? 'border-red-500' : ''}`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.smoker && <p className="text-red-500 text-sm mt-1">{errors.smoker}</p>}
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-blue-900 font-medium mb-1">Upload Image</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className={`p-2 bg-blue-600 text-white rounded-xl ${
              errors.image ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className={`bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </div>
          ) : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}