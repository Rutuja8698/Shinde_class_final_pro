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
    </div>
  );
};

export default About;
