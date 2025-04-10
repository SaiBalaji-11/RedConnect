import { useLocation, useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_API_URL;

// Capitalize each word: "gandhi nagar" → "Gandhi Nagar"
const toTitleCase = (str) =>
  str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const MatchingUser = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const matches = state?.matches || [];

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 text-lg hover:underline"
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-6 text-red-600">Matched Users:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {matches.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center max-w-sm mx-auto"
          >
            <div className="w-full flex justify-center mb-3">
              <img
                src={`${api}/uploads/${user.image}`}
                alt={user.name}
                className="h-40 object-cover rounded-2xl w-full max-w-[200px]"
              />
            </div>

            <h3 className="text-lg font-bold text-center">
              {toTitleCase(user.name)}
            </h3>
            <p className="text-gray-700">
              <strong>Blood Group:</strong> {toTitleCase(user.bloodGroup)}
            </p>
            <p className="text-gray-700 text-center">
              <strong>Location:</strong>{" "}
              {toTitleCase(user.city)}, {toTitleCase(user.state)}
            </p>

            {/* ✅ Visible on large devices only */}
            <div className="hidden sm:block mt-2 text-center text-gray-800 font-bold">
              {user.phone}
            </div>

            {/* ✅ Action Buttons */}
            <div className="mt-4 w-full flex flex-col sm:flex-row gap-2 justify-center items-center">
              <a
                href={`https://wa.me/${user.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-6 py-2 rounded font-semibold text-sm hover:bg-green-600 text-center"
              >
                WhatsApp
              </a>

              {/* ✅ Small device only "Call Now" button - same style as WhatsApp */}
              <a
                href={`tel:${user.phone}`}
                className="block sm:hidden w-full bg-blue-500 text-white px-6 py-2 rounded font-semibold text-sm hover:bg-blue-600 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingUser;
