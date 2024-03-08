import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGI5YWRlMzQxNzM1NGY5ZDg5ODg0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDE4MDU0MywiZXhwIjoxNzA0NDM5NzQzfQ.FgWEv1c32GJphplCc_ai8HH3j_eduncOr0NvzNo-aeI";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
