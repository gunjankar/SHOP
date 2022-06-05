import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTM2MzI1ZDdhNzc0ZDAzYzhjYjUwZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDg4MDgzMDQsImV4cCI6MTY0OTA2NzUwNH0.ZNGAC-bjVI1YV__UXjjVF0Tv6D6etvlFpnp95PhbKGQ";
const TOKEN = localStorage.getItem("token");

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
