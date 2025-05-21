"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import styles from "./styles/ImageGrid.module.css"

export default function ImageGridPage() {
  const [enabled, setEnabled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const images = [
    { src: "ltdm_logo.jpg", text: "Les Terres de Miseria", href: "/ltdm", styleClass: styles.textLtdm ,alt: "Les Terres de Miseria" },
    { src: "lltk_logo.jpg", text: (<> Long Live<br />The King</>), href: "/lltk", styleClass: styles.textLltk,alt: "Long Live The King" },
    { src: "otm_logo.jpeg", text: "Outre Terres et Mers", href: "/otm", styleClass: styles.textOtm,alt: "Outre Terre et Mers"  },
    { src: "neon_logo.png", text: "Néon", href: "/neon", styleClass: styles.textNeon,alt: "Neon"  },
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
          {images.map((img, idx) => (
            <a
              key={idx}
              href={img.href}
              className={`relative group w-64 h-64 rounded-2xl overflow-hidden shadow-lg ${styles.imageItem}`}
            >
              {/* Background image with blur & opacity */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 opacity-80 group-hover:blur-0 group-hover:opacity-100 z-10"
              />
              {/* Bande rétro animée pour Néon */}
              {img.text === "Néon" && (
                <>
                  <div className={styles.tvLines} />
                  <div className={styles.tvGlitch} />
                  <div className={styles.tvScanline} />
                </>
              )}
              {/* Text over image */}
              <div className="relative z-10 flex items-center justify-center h-full w-full">
                <span className={img.styleClass}>{img.text}</span>
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
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            enabled ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              enabled ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}
