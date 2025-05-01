import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001"
    : process.env.REACT_APP_API_URL;

axios.defaults.baseURL = baseURL;
