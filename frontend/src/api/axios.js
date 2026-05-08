import axios from "axios";

const API = axios.create({
  baseURL: "https://dacby-assignment-hd6y.onrender.com/api",
});

export default API;