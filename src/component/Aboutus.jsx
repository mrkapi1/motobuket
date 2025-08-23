import React from "react";

// --- AboutUs Component ---
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased text-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#67D300]">
            About Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light text-gray-400 max-w-3xl mx-auto">
            MotoBukket is more than just a car wash; we are a dedicated team passionate about vehicle care and customer satisfaction.
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Founded in 2020, MotoBukket started with a simple idea: to provide a better, more trustworthy vehicle care experience. We noticed a gap in the market for a service that combined high-quality work with honest, transparent pricing. From a small garage to a state-of-the-art facility, we've grown by staying true to our core values and putting our customers first. Today, we offer a comprehensive range of services, from routine washes to complex bodywork, all handled with expert care.
          </p>
        </div>

        {/* Our Team Section with Image */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">Meet the Team</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Behind every clean car is a dedicated professional. Our team is composed of passionate and experienced experts who take pride in their work. We're committed to providing the best service, using our knowledge and skills to ensure your vehicle looks its best. We believe that a personal touch makes all the difference, and our team is what truly sets us apart.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" 
              alt="A photo of the MotoBukket team" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Our Technology Section with Image */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Cutting-Edge Technology</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We invest in the latest technology and eco-friendly products to give your vehicle a superior clean without harming the environment. From automated systems that ensure a uniform wash to specialized tools for delicate detailing, our technology allows us to work efficiently and effectively, delivering results that exceed your expectations.
            </p>
          </div>
          <div>
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2022/1/IA/MN/RU/145419489/mobile-car-washing-services.jpg" 
              alt="A photo of advanced car wash equipment" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our mission is to deliver exceptional vehicle care with unmatched quality and integrity. We aim to build long-lasting relationships with our clients by providing reliable service, fair prices, and a commitment to excellence in every job we do. We believe in earning your trust, one wash at a time.
            </p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-400 space-y-3">
              <li><strong className="text-white">Quality:</strong> We use the best products and techniques to ensure a flawless finish.</li>
              <li><strong className="text-white">Integrity:</strong> We are honest and transparent in all our dealings.</li>
              <li><strong className="text-white">Customer Focus:</strong> Your satisfaction is our top priority.</li>
              <li><strong className="text-white">Innovation:</strong> We continuously adapt to bring you the best in vehicle care technology.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App component to render the AboutUs page
export default function App() {
  return (
    <AboutUs />
  );
}