
import logo from '../assets/logo.png'
import React, { useState, useEffect } from "react";
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// The following SVG icons are provided as self-contained assets
// to make the app runnable without external dependencies.


const Truck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 18H3c-1.1 0-2-.9-2-2V8a2 2 0 0 1 2-2h3l3 2h3a2 2 0 0 1 2 2v6h-4" />
    <path d="M16 18h2l3 4h1c.6 0 1-.4 1-1v-4h-7" />
    <circle cx="7" cy="18" r="2" />
    <path d="M15.5 18.5a2.5 2.5 0 0 1 5 0" />
    <path d="M21 15v-3.5a1.5 1.5 0 0 0-3 0V15" />
  </svg>
);

const Paintbrush = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18.37 2.63c-.4-.4-.9-.63-1.43-.63s-1.03.23-1.43.63l-10.43 10.43c-.4.4-.63.9-.63 1.43V20h3.57c.53 0 1.03-.23 1.43-.63l10.43-10.43c.4-.4.63-.9.63-1.43s-.23-1.03-.63-1.43z" />
    <path d="M18.37 2.63l-1.44 1.44" />
    <path d="M8.57 15.43l1.44-1.44" />
    <path d="M10 13l-2.5 2.5" />
    <path d="M15 8l2.5-2.5" />
  </svg>
);

const Car = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 8v10m-4-6v6m-4-2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z" />
    <path d="M21 21h-2l1-4h1a2 2 0 0 1 2 2v2z" />
    <path d="M3 21h2l1-4H3z" />
  </svg>
);

const Handshake = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 11c1.23-1.23 3.53-2.9 5.61-3.64-1.46-1.46-3.76-2.93-5.61-3.64C16.89 2.52 14.89 4.52 13 6.37 11.2 4.6 9.2 2.6 7.4 2.6c-2 0-4 1.25-5 3.5" />
    <path d="M20 17c1.23 1.23 3.53 2.9 5.61 3.64-1.46 1.46-3.76 2.93-5.61 3.64C16.89 25.52 14.89 23.52 13 21.63 11.2 23.4 9.2 25.4 7.4 25.4c-2 0-4-1.25-5-3.5" />
    <path d="M13 13L9 17" />
    <path d="M13 13l4-4" />
  </svg>
);
const Smile = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);
const Timer = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="10" x2="14" y1="2" y2="2" />
    <path d="M12 2v6" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- Navbar Component ---
const Navbar = ({ onSignIn, onGetStarted }) => {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-md text-white p-4 lg:p-6 rounded-b-xl shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <img src={logo} alt="logo" className="h-10 w-auto" />
      <span className="text-2xl font-bold text-[#67D300]"></span>
    </div>
        <div className="space-x-4">
          <button
            onClick={onSignIn}
        className="px-4 py-2 text-white border-2 border-[#67D300] rounded-lg hover:bg-[#67D300] hover:text-black transition-all">
            Sign In
          </button>
          <button
            onClick={onGetStarted}
            className="px-4 py-2 bg-[#67D300] text-black font-semibold rounded-lg hover:bg-[#51A500] transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- Image Slider Component ---
const ImageSlider = () => {
  // Array of placeholder image URLs
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kpv2Ttz-qC4Y3cekO9ipRviZdgXqjTst4A&s",
    "https://rcs2020.netlify.app/images/slider/slider-img-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuxtK7mXdi4-aJeGNF7MxoPDLT4AVinPgwA&s",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatic slider functionality with a timer
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideTimer); // Cleanup on component unmount
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background images with fade transition */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image})`,
            opacity: currentSlide === index ? 1 : 0,
          }}
        ></div>
      ))}

      {/* Hero content positioned above the images */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Your Vehicle Deserves the Best
          </h1>
          <p className="text-lg sm:text-xl font-light">
            From a sparkling wash to precision bodywork, we handle it all with expert care.
          </p>
          <button className="px-8 py-4 bg-[#67D300] text-black text-lg font-bold rounded-full hover:bg-[#51A500] transition-colors shadow-lg transform hover:scale-105">
            Book a Service Now
          </button>
        </div>
      </div> */}

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button
          onClick={prevSlide}
          className="bg-gray-800/50 p-3 rounded-full text-white mx-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67D300]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button
          onClick={nextSlide}
          className="bg-gray-800/50 p-3 rounded-full text-white mx-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67D300]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-[#67D300] w-6" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

// --- Service Categories Component ---
const ServiceCategories = () => {
  const services = [
    { name: 'Vehicle Wash', icon: <Car className="w-12 h-12 text-[#67D300]" />, description: 'From quick rinses to full interior detailing.' },
    { name: 'Denting', icon: <Truck className="w-12 h-12 text-[#67D300]" />, description: 'Expert dent removal to restore your vehicle’s shape.' },
    { name: 'Painting', icon: <Paintbrush className="w-12 h-12 text-[#67D300]" />, description: 'High-quality paint jobs for a flawless finish.' },
    { name: 'Bodywork', icon: <Handshake className="w-12 h-12 text-[#67D300]" />, description: 'Comprehensive repairs and restoration for all damage.' },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We offer a full range of services to keep your vehicle looking and performing its best.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 space-y-4">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Why Choose Us Section ---
const WhyChooseUs = () => {
  const benefits = [
    { name: 'Quality Service', icon: <Smile className="w-8 h-8 text-[#67D300]" />, description: 'Our team uses the latest technology and techniques to ensure top-notch results.' },
    { name: 'Fast & Efficient', icon: <Timer className="w-8 h-8 text-[#67D300]" />, description: 'We get the job done right, and we get it done quickly so you can get back on the road.' },
    { name: 'Competitive Pricing', icon: <Handshake className="w-8 h-8 text-[#67D300]" />, description: 'Enjoy premium services without the premium price tag. We offer transparent and fair pricing.' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose MotoBukket?</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We are committed to providing the best experience for you and your vehicle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 space-y-4 text-center">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white">{benefit.name}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    
    <footer className="bg-gray-950 text-gray-400 py-12">
     
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">MotoBukket</h4>
          <p>Your one-stop solution for all vehicle care needs. Get a sparkling clean and flawless finish every time.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">Quick Links</h4>
           <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="./Aboutus" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="./Contactus" className="hover:text-white transition-colors">Contact Us</Link></li>
           
          </ul>
          
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">Contact Us</h4>
          <p>123 Vehicle Lane, Auto City, 54321</p>
          <p>Email: contact@motobukket.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-8 pt-8 border-t border-gray-800">
        <p>&copy; 2025 MotoBukket. All rights reserved.</p>
      </div>
      
    </footer>
    
  );
};

// --- Main HomePage Component ---
const HomePage = ({ onSignIn, onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased text-white">
      <Navbar onSignIn={onSignIn} onGetStarted={onGetStarted} />
      <ImageSlider />
      <ServiceCategories />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

// --- App Component (main entry point) ---
export default function App() {
  // Placeholder logic for future navigation
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log("Sign In clicked");
    setIsLoggedIn(true);
  };
  
  const handleGetStarted = () => {
    // Implement logic for a "Get Started" call-to-action
    console.log("Get Started clicked");
    // You could navigate to a sign-up page or services section
  };

  return (
    <HomePage onSignIn={handleSignIn} onGetStarted={handleGetStarted} />
  );
}