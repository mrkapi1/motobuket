import React from 'react';

// Main App component
const App = () => {
  return (
    // Main container for the entire page
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-sans">
      
      {/* Signup card container */}
      <div className="w-full max-w-2xl bg-lime-500 rounded-3xl p-6 md:p-12 shadow-2xl">
        
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <span className="text-4xl md:text-5xl font-bold text-black font-['Inter']">Motobuket</span>
        </div>

        {/* Register heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-8">Register</h2>

        {/* Main form */}
        <div className="space-y-4">
          
          {/* First Name & Last Name inputs */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Phone input */}
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password input with icon */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </span>
          </div>

          {/* Terms and Conditions checkbox */}
          <div className="flex items-center space-x-2 text-black">
            <input type="checkbox" className="h-4 w-4 rounded-sm border-black accent-black text-lime-500" />
            <p className="text-sm">
              By proceeding, you agree to the <span className="font-bold text-black underline">Terms and Conditions</span>
            </p>
          </div>
        </div>

        {/* Sign up with email button */}
        <button className="w-full mt-8 p-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition-colors">
          Sign up with email
        </button>

        {/* Or Signup with divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-b border-black"></div>
          <span className="mx-4 text-black font-semibold">Or Signup with</span>
          <div className="flex-grow border-b border-black"></div>
        </div>

        {/* Social sign-up buttons */}
        <div className="flex space-x-4">
          {/* Google Button */}
          <button className="flex-1 flex items-center justify-center p-4 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M18 10C12.98 10 9 13.98 9 19s3.98 9 9 9c4.27 0 7.82-2.91 8.86-7H18v-4h15V22c0 8.84-7.16 16-16 16-8.84 0-16-7.16-16-16S9.16 3 18 3c4.65 0 8.78 1.83 11.84 4.88L29.74 3.7c-4.16-4.16-10.02-6.7-16.74-6.7-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22h-10c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10z" />
              <path fill="#2196F3" d="M37 24h-4v-4h-2v4h-4v2h4v4h2v-4h4V24z" />
            </svg>
            Google
          </button>
          
          {/* Apple Button */}
          <button className="flex-1 flex items-center justify-center p-4 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="white">
              <path d="M12 1.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 9c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm-5.75 6c0-2.31 3.59-4.25 5.75-4.25s5.75 1.94 5.75 4.25v2.25H6.25v-2.25zm5.75-.75c2.14 0 4.25-1.07 4.25-1.5s-2.11-.75-4.25-.75c-2.14 0-4.25.33-4.25.75s2.11 1.5 4.25 1.5zM12 15c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Apple
          </button>
        </div>

        {/* Login link */}
        <div className="flex justify-center mt-8">
          <p className="text-black text-sm">
            Already have an account? <span className="font-bold text-black underline cursor-pointer">Login Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
