import axios from "axios";

const axiosInastance = axios.create({
  baseURL: "https://www.reddit.com/r/Egypt",
});
export default axiosInastance;
