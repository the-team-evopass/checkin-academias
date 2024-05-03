import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";
import ConsoleLogHMG from '../../../utils/consoleLogHMG/consoleLogHMG';

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

        ConsoleLogHMG(response)

        if (response.data) {
            return 200
        }

    } catch (error) {
        console.error(error)
        return 500
    }
}
