import axios from "axios";
import BaseUrl from '../../baseurl/BaseUrl';

export default async function GetTicketGateConfiguration (gymID: string | undefined) {

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/unit/?id=${gymID}`,
      headers: { }
    }
    
    try {
        const response = await axios.request(config);
        return(response.data.unit.TicketGateConfiguration)
    } catch (error) {
        console.log(error);
        throw error;
    }
}
