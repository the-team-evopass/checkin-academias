import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export default async function postCreateCheckinRedundant (studentCPF: string, accessToken: string) {

    const data = '';
    
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/check-in/by-employee/${studentCPF}`,
      headers: { 
        'Authorization': `Bearer ${accessToken}`,
      },
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