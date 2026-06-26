"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Lock, ArrowLeft, Loader2, CheckCircle2, ShieldAlert, Mail } from "lucide-react";
import { getAssetPath } from "@/utils/path";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [customGoogleName, setCustomGoogleName] = useState("");
  const [customGoogleEmail, setCustomGoogleEmail] = useState("");
  const [isGoogleCustomMode, setIsGoogleCustomMode] = useState(false);

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

  const validateSignUp = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) {
      e.name = "Full Name is required";
    }
    if (!username.trim()) {
      e.username = "Username or Email is required";
    }
    if (!password) {
      e.password = "Password is required";
    } else if (password.length < 6) {
      e.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      e.confirmPassword = "Passwords do not match";
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

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const enteredUser = username.trim();
    
    // Check local storage registered users
    const usersStr = localStorage.getItem("registeredUsers") || "[]";
    const users = JSON.parse(usersStr) as Array<{ name: string; username: string; pass: string }>;

    const matchingUser = users.find(
      (u) => u.username.toLowerCase() === enteredUser.toLowerCase() && u.pass === password
    );

    // Simulated credentials check
    if ((enteredUser === "Shanmukha" && password === "Shanmukha29*") || matchingUser) {
      localStorage.setItem("isLoggedIn", "true");
      const loggedInName = matchingUser ? matchingUser.name : "Shanmukha";
      localStorage.setItem("currentUser", JSON.stringify({ name: loggedInName, username: enteredUser }));
      
      setStatus("success");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      setStatus("error");
      setErrorMessage("Invalid username or password.");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateSignUp();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const usersStr = localStorage.getItem("registeredUsers") || "[]";
    const users = JSON.parse(usersStr) as Array<{ name: string; username: string; pass: string }>;

    if (username.trim().toLowerCase() === "shanmukha" || users.some(u => u.username.toLowerCase() === username.trim().toLowerCase())) {
      setStatus("error");
      setErrorMessage("Username or Email is already registered. Please sign in instead.");
      return;
    }

    users.push({ name: name.trim(), username: username.trim(), pass: password });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify({ name: name.trim(), username: username.trim() }));

    setStatus("success");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  const handleGoogleLogin = async (selectedName: string, selectedEmail: string) => {
    setShowGoogleModal(false);
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify({ name: selectedName, username: selectedEmail }));
    
    setStatus("success");
    setTimeout(() => {
      router.push("/");
    }, 1500);
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
        <div className="flex flex-col items-center text-center mb-6">
          <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform duration-300">
            <img
              src={getAssetPath("/images/logo.png")}
              alt="Teja Suppliers Logo"
              className="w-16 h-16 rounded-2xl object-contain bg-white p-1.5 border border-gray-200 dark:border-white/10 shadow-md shadow-blue-500/10"
            />
          </Link>
          <h1 className="font-sans font-black text-2xl text-gray-900 dark:text-white">
            {mode === "signin" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {mode === "signin" ? "Sign in to your supplier dashboard" : "Register to access chemical dashboard"}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-100 dark:border-white/5 mb-6">
          <button
            type="button"
            onClick={() => { setMode("signin"); setErrors({}); setErrorMessage(""); }}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              mode === "signin" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode("signup"); setErrors({}); setErrorMessage(""); }}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              mode === "signup" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-green-500 dark:text-green-400 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {mode === "signin" ? "Login Successful!" : "Account Created Successfully!"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Redirecting you to the portal...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={mode === "signin" ? handleLogin : handleSignUp} className="space-y-4" noValidate>
            {status === "error" && (
              <div className="flex gap-3 items-start bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400">
                <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{errorMessage}</p>
              </div>
            )}

            {mode === "signup" && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Shanmukha Belide"
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${
                      errors.name ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-white/10"
                    }`}
                  />
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-0.5">{errors.name}</p>}
              </div>
            )}

            {/* Username Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {mode === "signin" ? "Username" : "Username or Email"}
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  placeholder={mode === "signin" ? "Shanmukha" : "shanmukha@gmail.com"}
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
                {mode === "signin" && (
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
                )}
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

            {mode === "signup" && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    placeholder="••••••••"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${
                      errors.confirmPassword ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-white/10"
                    }`}
                  />
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                {errors.confirmPassword && <p className="text-red-500 dark:text-red-400 text-xs mt-0.5">{errors.confirmPassword}</p>}
              </div>
            )}

            {mode === "signin" && (
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
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm transition-all duration-300 btn-glow disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> {mode === "signin" ? "Signing In..." : "Creating Account..."}
                </>
              ) : (
                mode === "signin" ? "Sign In" : "Create Account"
              )}
            </button>

            {/* Google Divider */}
            <div className="relative my-5 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/5"></div>
              </div>
              <span className="relative bg-white dark:bg-gray-900 px-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Or continue with</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowGoogleModal(true);
                setIsGoogleCustomMode(false);
                setCustomGoogleName("");
                setCustomGoogleEmail("");
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-200 font-bold text-sm transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
          </form>
        )}
      </div>

      {/* Google Sign In Simulator Modal */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl relative flex flex-col gap-6">
            <button
              onClick={() => setShowGoogleModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold text-base"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <h2 className="font-bold text-lg text-gray-900 dark:text-white">Choose an account</h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs">to continue to Teja Suppliers</p>
            </div>

            {!isGoogleCustomMode ? (
              <div className="flex flex-col gap-2.5">
                {[
                  { name: "Shanmukha Belide", email: "shanmukha.belide@gmail.com", initial: "S", bg: "bg-blue-500" },
                  { name: "Teja Suppliers Admin", email: "admin@tejasuppliers.com", initial: "T", bg: "bg-green-600" },
                ].map((acc) => (
                  <button
                    key={acc.email}
                    onClick={() => handleGoogleLogin(acc.name, acc.email)}
                    className="flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-left transition-all duration-200"
                  >
                    <div className={`w-8 h-8 rounded-full ${acc.bg} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {acc.initial}
                    </div>
                    <div className="flex flex-col leading-tight overflow-hidden">
                      <span className="text-xs font-bold text-gray-900 dark:text-white truncate">{acc.name}</span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{acc.email}</span>
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => setIsGoogleCustomMode(true)}
                  className="flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-left text-xs font-semibold text-blue-600 dark:text-blue-400 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold text-sm shrink-0">
                    +
                  </div>
                  Use another account
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (customGoogleName && customGoogleEmail) {
                    handleGoogleLogin(customGoogleName, customGoogleEmail);
                  }
                }}
                className="space-y-4"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="gName" className="text-[10px] font-bold text-gray-400 uppercase">Your Name</label>
                  <input
                    id="gName"
                    type="text"
                    required
                    value={customGoogleName}
                    placeholder="Shanmukha Belide"
                    onChange={(e) => setCustomGoogleName(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-900 dark:text-white outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="gEmail" className="text-[10px] font-bold text-gray-400 uppercase">Google Email</label>
                  <input
                    id="gEmail"
                    type="email"
                    required
                    value={customGoogleEmail}
                    placeholder="name@gmail.com"
                    onChange={(e) => setCustomGoogleEmail(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-900 dark:text-white outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsGoogleCustomMode(false)}
                    className="flex-1 py-2 text-xs font-bold border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
