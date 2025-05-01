import axios from "axios";

// Always prefer the environment variable if it's defined
const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5001";

axios.defaults.baseURL = baseURL;
