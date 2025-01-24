import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para configurar o token
export const setAuthToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Para remover o token (útil para logout)
export const removeAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};
