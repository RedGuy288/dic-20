"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";
import LoginModal from "../components/LoginModal";



export default function ImageGridPage() {


  const [enabled, setEnabled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  const images = [
    { src: "jbcH2OB.png", text: "Les Terres de Miséria", href:'/ltdm' },
    { src: "jbcH2OB.png", text: "Long Live The King", href:'/lltk' },
    { src: "jbcH2OB.png", text: "Outre Terres et Mers", href:'/otm' },
    { src: "jbcH2OB.png", text: "Néon", href:'/neon' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Login Icon */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
      <button
        onClick={() => setShowLogin(true)}
        className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold hover:bg-blue-700 transition-colors"
      >
  A
</button>

      </div>

      {/* Image Grid */}
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-6">
          {images.map((img, idx, hr) => (
            <a
              key={idx}
              href={img.href}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.text}
                className="w-64 h-64 object-cover opacity-50 group-hover:opacity-100 transition duration-500 rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-white text-xl font-semibold drop-shadow-lg">
                  {img.text}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-1">
        <Pencil className="w-6 h-6 text-gray-700" />
        <button
          onClick={() => setEnabled(!enabled)}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? 'bg-green-500' : 'bg-gray-400'}`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-0'}`}
          />
        </button>
      </div>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

