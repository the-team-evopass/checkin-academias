import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";

// precisamos padronizar as respostas das reqs

export async function IsLogged(userAccessToken: string) {

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/v2/user`,
        headers: {
            'Authorization': userAccessToken,
        },
    };

    try {
        const response = await axios.request(config);

        if (response.data) {
            return 200
        }

    } catch (error) {
        console.error(error)
        return 500
    }
}
