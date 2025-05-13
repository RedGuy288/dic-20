import { X } from "lucide-react";
import { useState } from "react";
import styles from "../styles/LoginModal.module.css"; // Importation des styles

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          <X className="w-5 h-5" />
        </button>
        <h2 className={styles.modalTitle}>Connexion</h2>
        <form className="modalForm">
          <input
            type="email"
            placeholder="Email"
            className={styles.modalFormInput}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className={styles.modalFormInput}
          />
          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
