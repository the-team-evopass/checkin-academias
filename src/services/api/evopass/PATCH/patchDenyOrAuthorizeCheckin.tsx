import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

export default function patchDenyOrAuthorizeCheckin (gymId: string, idStudent: string) {
    const token = store.getState().userInfos.loggedInUserToken; 
    
    const config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/check-in?id=${gymId}&idStudent=${idStudent}`,
        headers: {
            Authorization: `Bearer ${token}`,
            "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
        },
    };
        
    axios.request(config).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}