import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/src/app/api", // ← adapte à ton backend
  withCredentials: true, // ← pour envoyer les cookies refresh_token
});

// Ajoute automatiquement le JWT access token dans les headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
