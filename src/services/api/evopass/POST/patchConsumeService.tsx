import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

export default async function patchConsumeService (idService: string) {
  const token = store.getState().userInfos.loggedInUserToken; 

  const data = {
    isActive: false,
  };
  
  const config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/purchased-service/${idService}`,
    data : data,
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