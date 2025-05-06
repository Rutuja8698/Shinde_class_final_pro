<<<<<<< HEAD
import React, { useState } from "react";
import { FaRobot, FaBrain, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../../components/Home/Footer"; // Adjust the path if needed

=======
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ProgressBar component remains unchanged
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

// Sections with token names displayed in the content
const sections = [
  {
    title: "Our Vision",
    content:
      "At Shinde Classes, we envision shaping future leaders by providing quality education and fostering innovation and creativity. {VISION_GOAL}",
  },
  {
    title: "Our Mission",
    content:
      "To deliver personalized, inclusive, and high-quality educational services that empower students to reach their fullest potential. {MISSION_FOCUS}",
  },
  {
    title: "Career Counseling",
    content:
      "Unlock your future with Shinde Classes! Our career guidance programs are designed to empower students with the knowledge and insights they need to make confident, informed decisions about their academic and professional paths. Whether you’re exploring career options or looking for expert advice on your next steps, our tailored guidance helps you chart a course for success in today's competitive world. {CAREER_EMPOWERMENT}",
  },
  {
    title: "Innovative Learning Methods",
    content:
      "At Shinde Classes, we embrace innovation in education. Our advanced management system seamlessly integrates state-of-the-art teaching methods to create an engaging, interactive, and hands-on learning experience. By combining theory with practical application, we ensure that students not only understand the concepts but also gain the real-world skills needed to excel. Experience the future of learning today! {LEARNING_FUTURE}",
  },
  {
    title: "Technology-Driven Management",
    content:
      "Shinde Classes uses advanced digital platforms to track your attendance, performance, and data, ensuring a smooth and transparent learning experience. Stay organized and informed with real-time updates every step of the way! {TECH_MANAGEMENT}",
  },
  {
    title: "Parental Involvement",
    content:
      "We keep parents actively involved by providing regular updates on student progress, encouraging a collaborative effort for student success, and sending automated reminders to parents for upcoming fee payments, reducing late payments and streamlining the process. {PARENT_PARTNERSHIP}",
  },
  {
    title: "Our Facilities",
    content:
      "Modern classrooms, advanced laboratories, a rich library, and digital learning resources ensure the best learning environment. {FACILITY_OVERVIEW}",
  },
  {
    title: "Student Success",
    content:
      "At Shinde Classes, we take pride in our alumni who have achieved great success in various fields, thanks to our dedicated educators and personalized guidance. {SUCCESS_STORIES}",
  },
];
>>>>>>> 7da7f891238085d52288dd75f0b2e226318cd103

const About = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        }
        clearInterval(interval);
        return 100;
      });
    }, 300);
  }, []);

  useEffect(() => {
    let scrollInterval;
    if (!isHovered) {
      scrollInterval = setInterval(() => {
        setCurrentSection((prev) => (prev + 1) % sections.length);
      }, 5000);
    }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const handleLearnMoreClick = () => {
    setShowMoreContent(!showMoreContent);
  };

<<<<<<< HEAD
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
=======
  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./images/About/students.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div
        className="relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full top-0 z-20 p-2 fixed">
          <ProgressBar progress={progress} />
        </div>

        <div className="flex flex-col items-center py-20">
          <motion.div
            className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl mx-4 md:mx-0 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              {sections[currentSection].title}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {sections[currentSection].content}
            </p>

            <motion.button
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg"
              onClick={handleLearnMoreClick}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              {showMoreContent ? "Show Less" : "Learn More"}
            </motion.button>

            {showMoreContent && (
              <motion.div
                className="mt-6 text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p>
                  Shinde Classes focuses on holistic student development, fostering academic and personal growth through modern teaching techniques.
                </p>
                <p className="mt-4">
                  Our commitment to excellence drives innovation in learning and ensures each student is equipped to face future challenges.
                </p>
              </motion.div>
            )}

            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
                onClick={handlePrev}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 mx-2 bg-purple-500 text-white rounded-lg"
                onClick={handleNext}
              >
                Next
              </button>
            </div>

            <div className="flex justify-center mt-6">
              {sections.map((_, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
                    index === currentSection ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSection(index)}
                ></span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
>>>>>>> 7da7f891238085d52288dd75f0b2e226318cd103
    </div>
    {/* Footer Section */}
<section className="mt-16">
  <Footer />
</section>
</>
  );
};

export default About;
