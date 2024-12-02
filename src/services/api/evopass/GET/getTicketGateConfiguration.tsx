import axios from "axios";
import BaseUrl from '../../baseurl/BaseUrl';
import store from "../../../../redux/store";

export default async function GetTicketGateConfiguration (gymID: string | undefined) {
    const token = store.getState().userInfos.loggedInUserToken;

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/unit/?id=${gymID}`,
      headers: {
        Authorization: `Bearer ${token}`,
    },
    }
    
    try {
        const response = await axios.request(config);
        return(response.data.unit.TicketGateConfiguration)
    } catch (error) {
        console.log(error);
        throw error;
    }
}
