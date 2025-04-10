import React, { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL;

const Home = () => {
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalDonors: 0,
    topDonors: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/api/stats`);
        setSummary(res.data);
      } catch (err) {
        console.error("Error fetching summary:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
        Blood Donation Portal
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Donate blood, save lives. Your small contribution can make a huge difference!
      </p>

      {/* Summary Cards */}
      {/* Summary Cards */}
<div className="flex flex-wrap justify-center gap-4 mb-6">
  <div className="bg-red-600 text-white text-center py-6 px-12 rounded-lg shadow-lg w-full md:w-1/2">
    <h2 className="text-4xl font-bold">{summary.totalUsers}</h2>
    <p className="text-lg">Total Users</p>
  </div>
  <div className="bg-blue-600 text-white text-center py-6 px-12 rounded-lg shadow-lg w-full md:w-1/2">
    <h2 className="text-4xl font-bold">{summary.totalDonors}</h2>
    <p className="text-lg">Total Blood Donors</p>
  </div>
</div>


      {/* Top Donors Table */}
      <div className="bg-blue-100 p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
          <span className="mr-2">🏆</span> Top Blood Donors
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Blood Group</th>
                <th className="py-2 px-4">City</th>
                <th className="py-2 px-4">Donations</th>
              </tr>
            </thead>
            <tbody>
              {summary.topDonors.length > 0 ? (
                summary.topDonors.map((donor, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 px-4 capitalize">{donor.name}</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">{donor.bloodGroup}</td>
                    <td className="py-2 px-4 capitalize">{donor.city}</td>
                    <td className="py-2 px-4 font-bold">{donor.donations}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-4 px-4 text-center text-gray-600">
                    No donors found yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Government Schemes Section */}
      <div className="bg-red-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
          <span className="mr-2">🩸</span> Government & Blood Donation Updates
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>🧾 New Govt Blood Donation Initiative Launched</li>
          <li>🩺 Free Health Checkups for Regular Donors</li>
          <li>📱 Mobile App for Real-time Blood Requests Now Available</li>
          <li>🏥 Priority Treatment in Govt Hospitals for Frequent Donors</li>
          <li>🎁 Blood Donation Reward Program – Vouchers & Gifts</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
