import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";

export default function denyOrAuthorizeCheckin (gymId: string, idStudent: string) {
    
    const config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/check-in?id=${gymId}&idStudent=${idStudent}`,
        headers: { }
    };
        
    axios.request(config).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}