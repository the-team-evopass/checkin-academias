import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";
import ConsoleLogHMG from '../../../utils/consoleLogHMG/consoleLogHMG';

export async function IsLogged(userAccessToken: string) {

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/user/isLogged`,
        headers: {
            'Authorization': userAccessToken,
            "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
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
