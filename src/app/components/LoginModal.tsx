import { X } from "lucide-react";
import { useState } from "react";
import styles from "../styles/LoginModal.module.css";
import api from "../api/axios"
import { useRef } from "react";

interface LoginModalProps { 
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const route = "/auth/login";

      const response = await api.post(route, { email, password });
      const token = response.data.accessToken;

      localStorage.setItem("jwt", token); // stocke le token d'accès
      onClose(); // ferme la modal
      window.location.reload(); // recharge pour rafraîchir le contexte
    } catch (err: unknown) {
        if (err && typeof err === "object" && "response" in err) {
          const axiosError = err as { response?: { data?: { message?: string } } };
          setError(axiosError.response?.data?.message || "Erreur lors de la connexion");
    } else {
      setError("Erreur inconnue");
  }
}
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div  className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          <X className="w-5 h-5" />
        </button>
        <h2 className={styles.modalTitleBox}>Connexion</h2>

        <form className="modalForm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.modalFormInput}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.modalFormInput}
          />

          {error && <p className={styles.errorText}>{error}</p>}

          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>

          <a
            href = "/inscription"
            type="button"
            className={styles.signupButton}
          >
            Créer un compte
          </a>
        </form>
      </div>
    </div>
  );
}
