import React from 'react';
import { BsWhatsapp } from "react-icons/bs";

const Gallery = () => {
  const images = [
    '/Images/slider/sh4.png',
    '/Images/slider/sh5.png',
    '/Images/slider/2.jpg',
    


    '/Images/slider/sh1.jpg',

    '/Images/slider/5.jpg',
    '/Images/shindesir.jpg'


  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
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
  );
};

export default Gallery;
