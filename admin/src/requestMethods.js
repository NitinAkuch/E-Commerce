import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGI5YWRlMzQxNzM1NGY5ZDg5ODg0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzY0ODA2NiwiZXhwIjoxNzAzOTA3MjY2fQ.hfwGeN8QFmAYULW_oxVw8Gc54KGGfz3bejqi8MKzfok";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
