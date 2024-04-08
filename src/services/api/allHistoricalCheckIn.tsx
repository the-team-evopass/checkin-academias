import axios from "axios";
import BaseUrl from "./baseurl/BaseUrl";

interface ResposeData {
    id: number;
    fkUnit: number;
    cpfStudent: string;
    time: string;
    isChecked: boolean;
}

export default async function allHistoricalCheckIn( gymID: number) {
    
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/v2/check-in`,
      headers: { },
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