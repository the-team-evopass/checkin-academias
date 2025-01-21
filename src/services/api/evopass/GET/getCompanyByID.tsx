import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

export default async function GetCompanyByID (ID: string) {
    const token = store.getState().userInfos.loggedInUserToken; 

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/company/${ID}`,
        headers: {
            Authorization: `Bearer ${token}`,
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