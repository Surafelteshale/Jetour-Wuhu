import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signinBg from "../assets/images/bg_pattern.jpg";
import { FiUser, FiLock } from "react-icons/fi";
import { signInWithFirstName } from "../config/authService";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signInWithFirstName(username, password);

    setLoading(false);

    if (result.success) {
      // ✅ Save user in global auth context
      login(result.user);

      // ✅ Redirect to home
      navigate("/models");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${signinBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 w-full max-w-md p-10 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black mb-6 font-palanquin">
          Welcome
        </h1>

        <p className="text-black/70 mb-8 text-center">
          Sign in to your Jetour account and explore the latest models.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* First Name */}
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-black/60 w-5 h-5" />
            <input
              type="text"
              placeholder="First Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-xl bg-black/5 placeholder-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-blue transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-black/60 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-xl bg-black/5 placeholder-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-blue transition"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-cyan-blue rounded-xl text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
