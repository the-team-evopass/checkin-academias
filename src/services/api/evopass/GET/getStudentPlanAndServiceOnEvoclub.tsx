import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export async function GetStudentPlanAndServiceOnEvoclub (cpf:string) {

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/service-subscription/${cpf}?status=${'RECEIVED'}&activateFilter=true`,
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