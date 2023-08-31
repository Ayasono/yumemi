import Axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = Axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  timeout: 1000 * 10,
  headers: {
    "X-API-KEY": process.env.VUE_APP_API_KEY,
  },
});

export default apiClient;
