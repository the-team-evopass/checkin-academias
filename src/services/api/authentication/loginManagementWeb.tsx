import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";
// import ConsoleLogHMG from '../../../utils/consoleLogHMG/consoleLogHMG';

interface GetLoginManagementWebProps {
    email: string;
    password: string;
    role: string;
}

interface UserResponse {
    statusCode: boolean;
    accessToken?: string;
    user?: {
        uid: string,
        email: string,
        emailVerified: boolean,
        displayName: string,
        photoURL: string,
    };
    internalID?: number
}

export default async function GetloginManagementWeb({ email, password, role }: GetLoginManagementWebProps): Promise<UserResponse> {
    const data = JSON.stringify({
        "email": email,
        "password": password,
        "role": role
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseUrl}/user/signin/unit`,
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
        },
        data: data
    };

    try {

        const response = await axios.request(config);

        // ConsoleLogHMG(response)
        
        if ( response.data != false ) {
            return {
                statusCode: true,
                accessToken: response.data.accessToken,
                user: response.data.providerData[0],
                internalID: response.data.internalID
            }
        } else {
            return {
                statusCode: response.data,
            }
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
}