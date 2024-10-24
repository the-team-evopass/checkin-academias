import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export default async function postDeletServiceby (idService: string) {

  const data = '';
  
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/payments/${idService}?subAccount=${'EVOCLUB_REALITY'}`,
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