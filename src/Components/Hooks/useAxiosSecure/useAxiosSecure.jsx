import axios from "axios";
import React from "react";
const axiosSecure = axios.create({
  baseURL: "https://a9b12-server-side.vercel.app/",
});
export default function useAxiosSecure() {
  return axiosSecure;
}
