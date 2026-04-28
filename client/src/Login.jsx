import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("https://netflix-clone-s467.onrender.com/login", {
        email,
        password,
      });

      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-black bg-opacity-75 p-8 rounded w-96"
      >
        <h1 className="text-white text-3xl mb-6">Sign In</h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-700 text-white rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 p-3 rounded text-white font-bold">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;