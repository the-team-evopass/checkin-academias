import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

interface PostConsumeServiceParamsProps {
  isActive: boolean;
  usageDate: string;
  serviceId: string;
  fkUnit: number;
}

export default async function patchConsumeService(
  params: PostConsumeServiceParamsProps
) {
  const token = store.getState().userInfos.loggedInUserToken;

  const data = {
    isActive: params.isActive,
    usageDate: params.usageDate,
    fkUnit: params.fkUnit,
  };

  const config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${BaseUrl}/purchased-service/${params.serviceId}`,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
    },
  };

  try {
    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}
