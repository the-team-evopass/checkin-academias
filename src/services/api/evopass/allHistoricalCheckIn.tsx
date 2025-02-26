import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";
import store from "../../../redux/store";

interface ResposeData {
    id: number;
    fkUnit: number;
    cpfStudent: string;
    time: string;
    isChecked: boolean;
}

export default async function allHistoricalCheckIn(gymID: number) {
    const token = store.getState().userInfos.loggedInUserToken; 
    
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/check-in`,
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
    },
      data : ''
    };
    
    try {
        const response = await axios.request(config);
        const filtrado = response.data.filter((objeto: ResposeData) => objeto.id == gymID);
        return filtrado
    } catch (error) {
        console.error(error);
        throw error;
    }

}