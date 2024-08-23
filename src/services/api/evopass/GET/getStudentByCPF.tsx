import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export default async function GetStudentByCPF (CPF: string) {

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/unified-user/${CPF}`,
    headers: { }
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

