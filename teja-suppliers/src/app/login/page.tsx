"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Lock, ArrowLeft, Loader2, CheckCircle2, ShieldAlert } from "lucide-react";
import { getAssetPath } from "@/utils/path";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!username.trim()) {
      e.username = "Username is required";
    }
    if (!password) {
      e.password = "Password is required";
    }
    return e;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    // Simulate authentication API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulated test credentials
    if (username.trim() === "Shanmukha" && password === "Shanmukha29*") {
      localStorage.setItem("isLoggedIn", "true");
      setStatus("success");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      setStatus("error");
      setErrorMessage("Invalid username or password. Use test credentials (Shanmukha / Shanmukha29*).");
    }
  };

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Floating Controls */}
      <div className="absolute top-6 left-6 flex items-center gap-4 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Card Wrapper */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/5 backdrop-blur-xl">
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform duration-300">
            <img
              src={getAssetPath("/images/logo.png")}
              alt="Teja Suppliers Logo"
              className="w-16 h-16 rounded-2xl object-contain bg-white p-1.5 border border-gray-200 dark:border-white/10 shadow-md shadow-blue-500/10"
            />
          </Link>
          <h1 className="font-sans font-black text-2xl text-gray-900 dark:text-white">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Sign in to your supplier dashboard</p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-green-500 dark:text-green-400 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Login Successful!</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Redirecting you to the portal...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5" noValidate>
            {status === "error" && (
              <div className="flex gap-3 items-start bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400">
                <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{errorMessage}</p>
              </div>
            )}

            {/* Username Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Shanmukha"
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${
                    errors.username ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-white/10"
                  }`}
                />
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              {errors.username && <p className="text-red-500 dark:text-red-400 text-xs mt-0.5">{errors.username}</p>}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Password
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Please contact the administrator to reset your password.");
                  }}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${
                    errors.password ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-white/10"
                  }`}
                />
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              {errors.password && <p className="text-red-500 dark:text-red-400 text-xs mt-0.5">{errors.password}</p>}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 dark:border-white/10 rounded focus:ring-blue-500/40"
              />
              <label htmlFor="remember" className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-400 select-none">
                Remember me on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm transition-all duration-300 btn-glow disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>


          </form>
        )}
      </div>
    </main>
  );
}
