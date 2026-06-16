import axios from "axios"
import { getApiBaseUrl } from "./getBaseUrl"

export const http = axios.create({
    baseURL: getApiBaseUrl(),
    timeout: 30_000,
    headers: {
    "Content-Type": "application/json",
  },
})