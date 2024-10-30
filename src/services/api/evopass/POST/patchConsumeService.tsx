import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export default async function patchConsumeService (idService: string) {

  const data = {
    isActive: false,
  };
  
  const config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/purchased-service/${idService}`,
    data : data
  };
  
  try {
    const response = await axios.request(config);
    console.log(response)
    return(response.data)
  } catch (error) {
    console.log(error);
    throw error;
  }
}