import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

export default async function GetStudentByCPF (CPF: string) {
  const token = store.getState().userInfos.loggedInUserToken; 

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/unified-user/${CPF}`,
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

