import { useEffect, useState, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0f172a] text-white">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center px-6 sm:px-12">
        <div className="w-full max-w-md space-y-8 bg-[#1e293b] p-8 rounded-xl shadow-xl animate-fade-in">
          {/* Header */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="size-12 bg-[#334155] rounded-xl flex items-center justify-center">
                <MessageSquare className="size-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-sm text-gray-400">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="form-control">
              <label className="label font-medium text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-500 size-5" />
                <input
                  type="email"
                  ref={emailRef}
                  className="w-full bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label font-medium text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-500 size-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-400 hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - AuthImagePattern */}
      <AuthImagePattern
        title="Welcome back!"
        subtitle="Sign in to continue your conversations and catch up with your messages."
      />
    </div>
  );
};

export default LoginPage;
