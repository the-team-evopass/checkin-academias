import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export default async function GetCompanyByID (ID: string) {

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/company/${ID}`,
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