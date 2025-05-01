// src/axiosConfig.js
import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001"
    : "https://study-sync-backend-wdue.onrender.com";

axios.defaults.baseURL = baseURL;
