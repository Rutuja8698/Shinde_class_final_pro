import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqakwvzn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/footer/cont_1.jpeg)`,
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Overlay Image for Background Animation */}
      <div
        className="absolute inset-0 bg-center bg-contain opacity-50"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/footer/overlay-image.png)`,
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-200"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{ opacity: 0.5 }}
      />

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center space-y-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white">Get in Touch With Us!</h1>
          <h2 className="text-2xl font-semibold text-white">
            Have questions or need more information? Fill out the form, and we’ll get back to you promptly.
          </h2>
        </motion.div>

        {/* Contact Info Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
<motion.div
  className="bg-gray-100 p-4 rounded-lg text-center"
  whileHover={{ scale: 1 }}
>
  <img
    src={`${process.env.PUBLIC_URL}/Images/footer/Call.jpg`}
    alt="Call Us"
    className="w-16 mx-auto mb-4"
  />
  <h3 className="text-xl font-semibold">Call Us</h3>
  <a
    href="tel:+919763358004"
    className="text-blue-500 hover:underline"
  >
    +91-9763358004
  </a>
</motion.div>

  <motion.div
    className="bg-gray-100 p-8 rounded-lg text-center"
    whileHover={{ scale: 1 }}
  >
    <img
      src={`${process.env.PUBLIC_URL}/Images/footer/address.png`}
      alt="Address"
      className="w-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold">Address</h3>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Shinde+Classes,+Kadegaon,+Sangli,+Maharashtra,+415304"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Shinde Classes, Kadegaon, Sangli, Maharashtra, 415 304
    </a>
  </motion.div>

  <motion.div
    className="bg-gray-100 p-8 rounded-lg text-center"
    whileHover={{ scale: 1 }}
  >
    <img
      src={`${process.env.PUBLIC_URL}/Images/footer/email.png`}
      alt="Email"
      className="w-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold">Email</h3>
    <a
      href="mailto:shindeclasses@gmail.com"
      className="text-blue-500 hover:underline"
    >
      shindeclasses@gmail.com
    </a>
  </motion.div>

  <motion.div
    className="bg-gray-100 p-8 rounded-lg text-center"
    whileHover={{ scale: 1 }}
  >
    <img
      src={`${process.env.PUBLIC_URL}/Images/footer/facebook.jpg`}
      alt="Facebook"
      className="w-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold">Facebook</h3>
    <a
      href="https://www.facebook.com/share/15onv1hBMA/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Visit Our Facebook Page
    </a>
  </motion.div>

  <motion.div
    className="bg-gray-100 p-8 rounded-lg text-center"
    whileHover={{ scale: 1 }}
  >
    <img
      src={`${process.env.PUBLIC_URL}/Images/footer/Fax.jpg`}
      alt="Fax"
      className="w-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold">Fax</h3>
    <a
      href="tel:+912342241106"
      className="text-blue-500 hover:underline"
    >
      (02342) 241106
    </a>
  </motion.div>
</div>

        {/* Form Section */}
        <motion.div
          className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 md:p-12 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-blue-800 text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      placeholder="Your Name"
      required
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
  >
    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      placeholder="Your Email"
      required
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.4 }}
  >
    <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      placeholder="Your Message"
      required
    ></textarea>
  </motion.div>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
    >
      Send Message
    </button>
  </div>

  {/* Success and Error Messages */}
  {status === "SUCCESS" && (
    <p className="text-green-600 mt-4 text-center">
      Thank you! Your message has been sent.
    </p>
  )}
  {status === "ERROR" && (
    <p className="text-red-600 mt-4 text-center">
      Oops! There was an error. Please try again.
    </p>
  )}
</form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
