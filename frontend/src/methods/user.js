import axios from "axios";
import { apiUrl } from "../config.json";
const recaptchaKey = "6LdVnqAbAAAAAIiFHQps4veSkiwqYx0bMGRI61OH";
const register = async (user) => {
  const { data } = await axios.post(apiUrl + "user/register", user);
  return data;
};

export { register, recaptchaKey };
