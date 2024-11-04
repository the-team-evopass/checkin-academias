import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";

export default async function resetUserPassword(email: string) {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${BaseUrl}/user/reset_password?email=${email}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.status;
  } catch (error) {
    console.log(error);
    return "";
  }
}
