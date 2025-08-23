import React, { useState } from "react";

// The following SVG icons are provided as self-contained assets
// to make the app runnable without external dependencies.

// Google Icon
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.242c-1.157 2.361-3.628 5.143-8.88 5.143-6.627 0-11.98-5.365-11.98-11.992s5.353-11.992 11.98-11.992c3.342 0 6.133 1.144 8.016 2.99l5.657-5.657C34.046 6.079 29.931 4 24.002 4c-11.052 0-20 8.948-20 20s8.948 20 20 20c11.04 0 20-8.948 20-20c0-.782-.068-1.554-.195-2.324z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691L1.933 10.318C3.13 7.59 5.201 5.093 7.866 3.527l5.657 5.656C11.832 10.82 9.479 12.441 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-5.657-5.656C29.215 35.031 26.66 36 24 36c-5.202 0-9.691-3.317-11.282-7.962l-5.656 5.656C10.156 41.556 16.096 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.242c-1.157 2.361-3.628 5.143-8.88 5.143-6.627 0-11.98-5.365-11.98-11.992s5.353-11.992 11.98-11.992c3.342 0 6.133 1.144 8.016 2.99l5.657-5.657C34.046 6.079 29.931 4 24.002 4c-11.052 0-20 8.948-20 20s8.948 20 20 20c11.04 0 20-8.948 20-20c0-.782-.068-1.554-.195-2.324z"
    />
  </svg>
);

// Apple Icon
const AppleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.012 2.002c-.894 0-1.802.247-2.616.738-1.405.856-2.58 2.324-3.18 4.026-.81 2.31-.893 4.887-.272 7.218.423 1.63 1.258 3.12 2.33 4.417 1.14 1.39 2.45 2.585 3.996 3.393.308.163.55.195.842.195s.534-.032.842-.195c1.545-.808 2.855-1.996 3.996-3.393 1.072-1.297 1.907-2.787 2.33-4.417.621-2.331.538-4.908-.272-7.218-.6-1.702-1.775-3.17-3.18-4.026-.814-.491-1.722-.738-2.616-.738zm0 2.01c.712 0 1.438.204 2.083.606 1.062.646 1.984 1.77 2.49 3.161.464 1.282.495 2.744.137 4.103-.39 1.492-.998 2.822-1.895 4.047-.95 1.296-1.996 2.34-3.163 2.94-1.07-.597-2.115-1.644-3.163-2.94-.897-1.225-1.505-2.555-1.895-4.047-.358-1.36-.327-2.821.137-4.103.506-1.39 1.428-2.515 2.49-3.161.645-.402 1.371-.606 2.083-.606z" />
  </svg>
);

// --- AuthCard Component ---
const AuthCard = () => {
  return (
    <div className="bg-[#67D300] p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-sm mx-auto my-auto text-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Login to your account
      </h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-gray-900 rounded focus:ring-2 focus:ring-gray-900"
            />
            <span>Remember me</span>
          </label>
          <a
            href="#"
            className="font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gray-900 text-[#67D300] font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
        >
          Sign in with email
        </button>
      </form>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-[#67D300] px-3 text-gray-900">
            Or login with
          </span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="flex-1 py-3 px-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center space-x-2">
          <GoogleIcon />
          <span className="text-sm font-semibold">Google</span>
        </button>
        <button className="flex-1 py-3 px-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center space-x-2">
          <AppleIcon />
          <span className="text-sm font-semibold">Apple</span>
        </button>
      </div>
      <div className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <a href="#"
          className="font-semibold text-gray-900 hover:text-gray-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-200 flex items-center justify-center p-4">
      {/* Centering the logo and the card */}
      <div className="absolute top-8 w-full text-center">
        <h1 className="text-4xl font-extrabold text-[#67D300]">MotoBukket</h1>
      </div>
      <AuthCard />
    </div>
  );
}