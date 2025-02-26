import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

export async function GetStudentPlanAndServiceOnEvoclub (cpf:string) {
    const token = store.getState().userInfos.loggedInUserToken; 

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/purchased-service?cpf=${cpf}`,
        headers: {
            Authorization: `Bearer ${token}`,
            "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
        },
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