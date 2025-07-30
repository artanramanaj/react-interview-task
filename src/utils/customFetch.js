import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;
const customFetch = axios.create({
  baseURL: `${baseURL}/api/v1`,
});

export default customFetch;
