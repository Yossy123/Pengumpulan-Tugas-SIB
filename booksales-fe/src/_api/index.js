import axios from "axios";

// const url ="https://akmal-bc.karyakreasi.id/api";
const url = "http://127.0.0.1:8000";

export const API = axios.create({
  baseURL: `${url}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const bookImageStorage = `${url}/storage`;

