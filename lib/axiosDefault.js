import axios from "axios";
import ConfigEnv from '../config/env';

const axiosInstanceDefault = axios.create({
  baseURL: ConfigEnv.baseUrlApiV1,
});
axiosInstanceDefault.interceptors.request.use(async (config) => {
  config.headers = {
    Accept: "application/json",
  };
  return config;
});
axiosInstanceDefault.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  async (error) => {
    console.log("error", error);
  }
);

export default axiosInstanceDefault;
