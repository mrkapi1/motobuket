import React, { useState, useEffect } from 'react';

// SVG Icons for the header navigation
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.21 9l-4.39-6.46c-.14-.2-.37-.31-.62-.31s-.48.11-.62.3l-4.39 6.46H3c-.55 0-1 .45-1 1s.45 1 1 1h.51l.9 12.17c.07.96.9 1.7 1.87 1.7h11.44c.97 0 1.8-.74 1.87-1.7l.9-12.17H21c.55 0 1-.45 1-1s-.45-1-1-1h-3.79zM6.92 20.72L6 8h12l-.92 12.72c-.06.84-.76 1.48-1.6 1.48H8.52c-.84 0-1.54-.64-1.6-1.48zm.8-10.72h8.56l.5 6.5H7.22l.5-6.5z" />
  </svg>
);

const SellerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 19H5V5h14v14zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM12 11h2V9h-2V7h-2v2H8v2h2v2h-2v2h2v-2h2v2h2v-2h-2z" />
  </svg>
);

// Chevron Icons for the slider
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
  </svg>
);

// Main App component
const App = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe"); // Mock user name

  // Car service categories
  const categories = [
    { name: "Interior Cleaning", icon: "🚗" },
    { name: "Exterior Wash", icon: "💦" },
    { name: "Full Detailing", icon: "✨" },
    { name: "Engine Bay Wash", icon: "🔧" },
    { name: "Ceramic Coating", icon: "🛡️" },
    { name: "Tire & Rim Care", icon: "🛞" },
    { name: "Headlight Restoration", icon: "💡" },
  ];

  // Mock banner data
  const banners = [
    {
      title: "Sparkling Clean",
      subtitle: "Get a professional wash from just ₹499",
      bgColor: "bg-motobuket-green"
    },
    {
      title: "Interior Sanitization",
      subtitle: "Protect your family with a deep clean",
      bgColor: "bg-gray-800"
    },
    {
      title: "Ceramic Coating Deals",
      subtitle: "Long-lasting shine for your car's paint",
      bgColor: "bg-black"
    }
  ];

  // Mock vendor data
  const vendors = [
    { name: "Eco-Shine Car Wash", rating: 4.8, imageUrl: "https://placehold.co/100x100/A0E7A0/000?text=V1" },
    { name: "Speedy Detailing", rating: 4.5, imageUrl: "https://placehold.co/100x100/A0E7A0/000?text=V2" },
    { name: "Clean Wheels Hub", rating: 4.9, imageUrl: "https://placehold.co/100x100/A0E7A0/000?text=V3" },
    { name: "Quick & Clean", rating: 4.2, imageUrl: "https://placehold.co/100x100/A0E7A0/000?text=V4" },
    { name: "Premier Auto Spa", rating: 4.7, imageUrl: "https://placehold.co/100x100/A0E7A0/000?text=V5" },
    { name: "Detail Dynamics", rating: 4.6, imageUrl: "https://placehold.co/100x100/A0E7A0/000?text=V6" },
  ];

  // State for location-based services
  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('pending'); // 'pending', 'granted', 'denied'
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to simulate user login
  const handleLogin = () => {
    // In a real app, this would be an API call and data would be fetched
    setTimeout(() => {
      setIsLoggedIn(true);
      console.log('User logged in successfully.');
    }, 500);
  };

  // Function to get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocationStatus('granted');
        },
        (error) => {
          // Log a more descriptive error message
          console.error("Geolocation error:", error.message);
          setLocationStatus('denied');
        }
      );
    } else {
      setLocationStatus('denied');
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* --- Header Section --- */}
      <header className="flex flex-col md:flex-row items-center justify-between p-4 md:px-8 lg:px-12 bg-black text-white shadow-lg">
        {/* Logo and Search */}
        <div className="flex items-center w-full md:w-auto">
          {/* Motobuket Logo */}
          <span className="text-3xl md:text-4xl font-bold font-['Inter'] mr-4">Motobuket</span>

          {/* Search Bar */}
          <div className="relative flex-grow md:flex-grow-0 w-full md:w-auto mt-4 md:mt-0">
            <input 
              type="text" 
              placeholder="Search for Services, Products and More"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#67D300]"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>
        
        {/* Navigation links */}
        <nav className="flex items-center space-x-4 mt-4 md:mt-0 w-full md:w-auto justify-around md:justify-end">
          <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition-colors">
            <CartIcon />
            <span className="font-semibold hidden lg:inline">Cart</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition-colors">
            <SellerIcon />
            <span className="font-semibold hidden lg:inline">Become a Partner</span>
          </a>
          
          {/* Conditional rendering for User Profile or Login */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold hidden md:inline">Hi, {userName}</span>
              <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition-colors">
                <UserIcon />
                <span className="font-semibold hidden lg:inline">Dashboard</span>
              </a>
            </div>
          ) : (
            <button 
              onClick={handleLogin} 
              className="py-2 px-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              Log In
            </button>
          )}
        </nav>
      </header>

      {/* --- Categories Section --- */}
      <section className="flex items-center justify-between p-4 bg-gray-900 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center mx-4 my-2 text-center text-gray-300 hover:text-white transition-colors cursor-pointer">
            <div className="text-4xl">{category.icon}</div>
            <span className="text-sm mt-1">{category.name}</span>
          </div>
        ))}
      </section>

      {/* --- Slider Section --- */}
      <section className="p-4 md:p-8 lg:p-12">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
          {/* Slider Content */}
          <div className={`relative h-48 md:h-64 lg:h-80 flex transition-transform duration-500`}
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 flex items-center justify-center`}
                style={{ backgroundColor: banner.bgColor === 'bg-motobuket-green' ? '#67D300' : (banner.bgColor === 'bg-gray-800' ? '#2D3748' : '#000000') }}
              >
                <div className="relative z-10 p-4">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
                    {banner.title}
                  </h1>
                  <p className="text-lg md:text-xl font-medium">
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls (Arrows) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"
          >
            <ChevronRightIcon />
          </button>

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services by Location Section --- */}
      <section className="p-4 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#67D300' }}>Services Near You</h2>
        
        {locationStatus === 'pending' && (
          <div className="text-center">
            <p className="text-gray-400 mb-4">Allow location access to find services near you.</p>
            <button 
              onClick={getUserLocation} 
              className="py-2 px-6 text-black font-semibold rounded-md transition-colors"
              style={{ backgroundColor: '#67D300' }}
            >
              Enable Location
            </button>
          </div>
        )}

        {locationStatus === 'granted' && (
          <div className="bg-gray-900 rounded-lg p-6 shadow-md text-center">
            <p className="text-xl font-semibold mb-2" style={{ color: '#67D300' }}>Location Found!</p>
            <p className="text-gray-400 mb-4">We are now showing you the best services available in your area.</p>
            <p className="text-sm text-gray-500 mb-4">
              Latitude: {userLocation.latitude.toFixed(4)}, Longitude: {userLocation.longitude.toFixed(4)}
            </p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${userLocation.latitude},${userLocation.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-6 text-black font-semibold rounded-md transition-colors"
              style={{ backgroundColor: '#67D300' }}
            >
              Open in Google Maps
            </a>
          </div>
        )}

        {locationStatus === 'denied' && (
          <div className="bg-gray-900 rounded-lg p-6 shadow-md text-center">
            <p className="text-red-500 text-xl font-semibold mb-2">Location Access Denied</p>
            <p className="text-gray-400">Please enable location services in your browser settings to find services near you.</p>
          </div>
        )}
      </section>

      {/* --- Top Vendors Section --- */}
      <section className="p-4 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#67D300' }}>Top Vendors</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {vendors.map((vendor) => (
            <div key={vendor.name} className="flex-shrink-0 w-48 bg-gray-900 rounded-xl p-4 text-center shadow-lg">
              <img 
                src={vendor.imageUrl} 
                alt={vendor.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4"
                style={{ borderColor: '#67D300' }}
              />
              <h3 className="text-lg font-semibold mt-3 text-white">{vendor.name}</h3>
              <div className="flex items-center justify-center mt-1">
                <span className="text-yellow-400">⭐</span>
                <span className="ml-1 text-gray-300 font-medium">{vendor.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default App;