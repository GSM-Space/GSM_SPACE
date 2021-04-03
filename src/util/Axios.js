import axios from "axios";
import { baseUrl } from "../config/config.json";
import { getToken } from "./Token";

export const client = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const TokenClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `jwt ${getToken()}`,
  },
});
