import React, { useState } from "react";
import { FaRobot, FaBrain, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../../components/Home/Footer"; // Adjust the path if needed


const About = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreContent(!showMoreContent);
  };

  return (
    <>
    <div className="relative bg-gradient-to-br from-[#ff6f91] to-[#87ceeb] min-h-screen overflow-hidden background-gradient">
      {/* Top Banner */}
      <div className="bg-[#87ceeb] text-center py-6 shadow-md">
      <h1 className="text-3xl md:text-5xl font-bold text-black whitespace-nowrap inline-block animate-scroll-text animate-glow-text">
  About Shinde Coaching Classes
</h1>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-[#ff6f91] opacity-20 animate-float-slow text-3xl z-0">
        <FaRobot />
      </div>
      <div className="absolute top-1/2 left-1/4 text-[#ff6f91] opacity-20 animate-float-medium text-4xl z-0">
        <FaBrain />
      </div>
      <div className="absolute bottom-10 right-16 text-[#ff6f91] opacity-30 animate-float-medium text-4xl z-0">
        <FaCogs />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-20">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:w-1/2 border border-slate-200"
        >
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            Welcome to <span className="text-blue-600">Shinde Coaching Classes!</span>
          </h2>
          <hr className="mb-4 border-t border-blue-300 opacity-30" />
          <p className="text-slate-700 text-lg mb-4">
            For over <strong>10+ years</strong>, Shinde Classes has helped students
            achieve academic excellence. We are committed to excellence,
            innovation, and integrity. Our goal is to empower students with the
            tools they need to excel academically and personally.
          </p>
          <p className="text-slate-700 text-lg mb-4">
            Founded by passionate educators, we provide expert instruction,
            state-of-the-art resources, and a learning environment where students
         
            thrive. Join us and experience education that transforms and inspires.
          </p>

          <button
            onClick={handleLearnMoreClick}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded shadow hover:scale-105 transition-transform"
          >
            {showMoreContent ? "Show Less" : "Learn More"}
          </button>

          {showMoreContent && (
            <div className="mt-4 max-h-52 overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-blue-400 text-slate-700 text-base">
              <p>
                At Shinde Classes, we believe in nurturing talent and unlocking
                potential. Our dedicated team of educators ensures that each
                student receives personalized attention and guidance. Our proven
                methods and experienced educators provide a nurturing environment
                where learning thrives.
              </p>
              <p className="mt-3">
                Discover a variety of courses tailored to meet diverse learning
                needs and equip yourself with the skills for a brighter future.
                Our focus is on holistic development and fostering a love for
                lifelong learning.
              </p>
            </div>
          )}
        </motion.div>

        {/* Image and Badge */}
        <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative md:w-1/2 rounded-2xl overflow-hidden shadow-lg"
>
  {/* Background Logo Behind the Image */}
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10 z-0"
    style={{
      backgroundImage: "url('/Images/footer/logo.png')",
    }}    
  ></div>

  {/* Badge on Top */}
  <div className="absolute top-4 left-4 bg-red-600 text-white font-bold rounded-lg px-4 py-2 shadow-md z-10">
    <div className="text-3xl leading-tight">10+</div>
    <div className="text-sm">Years of Excellence</div>
  </div>

  {/* Main Image */}
  <img
    src="./images/About/students.jpg"
    alt="Classroom"
    className="relative w-full h-full object-cover rounded-2xl z-10"
  />
</motion.div>
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/9763358004"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg z-50"
      >
        <BsWhatsapp className="text-xl" />
        <span className="font-semibold">Chat with us</span>
      </a>
    </div>
    {/* Footer Section */}
<section className="mt-16">
  <Footer />
</section>
</>
  );
};

export default About;
