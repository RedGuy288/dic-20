"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "../styles/ImageGrid.module.css";

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setEnabled(true);
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setEnabled(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setEnabled(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (enabled) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setEnabled(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setEnabled(true);
    }
  };

  return (
    <div className={styles.toggleDarkContainer}>
      <button
        onClick={toggleTheme}
        className={`${styles.toggleButtonTheme} ${enabled ? styles.enabled : styles.disabled}`}
        aria-label="Toggle dark mode"
      >
        <div className={`${styles.toggleCircle} ${enabled ? styles.enabled : styles.disabled}`}>
          {enabled ? <FiMoon className={styles.iconInside} /> : <FiSun className={styles.iconInside} />}
        </div>
      </button>
    </div>
  );
}
