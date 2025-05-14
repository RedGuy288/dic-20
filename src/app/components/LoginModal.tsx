import { X } from "lucide-react";
import { useState } from "react";
import styles from "../styles/LoginModal.module.css";
import api from "../api/axios"

interface LoginModalProps { 
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const route = isRegisterMode ? "/auth/register" : "/auth/login";

      const response = await api.post(route, { email, password });
      const token = response.data.accessToken;

      localStorage.setItem("jwt", token); // stocke le token d'accès
      onClose(); // ferme la modal
      window.location.reload(); // recharge pour rafraîchir le contexte
    } catch (err: any) {
      setError(err.response?.data || "Erreur lors de la connexion");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          <X className="w-5 h-5" />
        </button>
        <h2 className={styles.modalTitle}>
          {isRegisterMode ? "Inscription" : "Connexion"}
        </h2>

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
            {isRegisterMode ? "S'inscrire" : "Se connecter"}
          </button>

          <button
            type="button"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
            className={styles.switchModeButton}
          >
            {isRegisterMode ? "Déjà inscrit ? Se connecter" : "Créer un compte"}
          </button>
        </form>
      </div>
    </div>
  );
}
