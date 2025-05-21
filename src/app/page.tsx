// page.tsx
"use client";

import Image from 'next/image';
import { Pencil } from "lucide-react";
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import styles from "./styles/ImageGrid.module.css";
import ThemeToggle from "./components/ThemeToggle";

export default function ImageGridPage() {
  const [enabled, setEnabled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const images = [
    { src: "/ltdm_logo.jpg", text: "Les Terres de Miseria", href: "/ltdm", styleClass: styles.textLtdm , alt: "Les Terres de Miseria" },
    { src: "/lltk_logo.jpg", text: (<>Long Live<br />The King</>), href: "/lltk", styleClass: styles.textLltk, alt: "Long Live The King" },
    { src: "/otm_logo.jpeg", text: "Outre Terres et Mers", href: "/otm", styleClass: styles.textOtm, alt: "Outre Terre et Mers" },
    { src: "/neon_logo.png", text: "Néon", href: "/neon", styleClass: styles.textNeon, alt: "Neon" },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Bouton de login */}
      <div className={styles.topControls}>
        <ThemeToggle/>
        <div className={styles.loginButtonWrapper}>
          <button
            onClick={() => setShowLogin(true)}
            className={styles.loginButton}
          >
            A
          </button>
        </div>
      </div>
      {/* Grille d'images */}
      <div className={styles.imageGridWrapper}>
        <div className={styles.imageGrid}>
          {images.map((img, idx) => (
            <a
              key={idx}
              href={img.href}
              className={`${styles.gridItem} ${styles.imageItem}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className={styles.gridImage}
                sizes="(max-width: 768px) 100vw, 33vw"
                fill
              />

              {img.text === "Néon" && (
                <>
                  <div className={styles.tvLines} />
                  <div className={styles.tvGlitch} />
                  <div className={styles.tvScanline} />
                </>
              )}

              <div className={styles.gridTextContainer}>
                <span className={img.styleClass}>{img.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Toggle */}
      <div className={styles.toggleContainer}>
        <Pencil className={styles.toggleIcon} />
        <button
          onClick={() => setEnabled(!enabled)}
          className={`${styles.toggleButton} ${enabled ? styles.enabled : styles.disabled}`}
        >
          <div
            className={`${styles.toggleCircle} ${enabled ? styles.enabled : styles.disabled}`}
          />
        </button>
      </div>      

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}
