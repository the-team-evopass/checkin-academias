import axios from "axios";
import BaseUrl from '../baseurl/BaseUrl';

export default async function GetTicketGateConfiguration (gymID: string) {

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/v2/unit/?id=${gymID}`,
      headers: { }
    }
    
    try {
        const response = await axios.request(config);
        return(response.data.TicketGateConfiguration[0])
    } catch (error) {
        console.log(error);
        throw error;
    }
}
