import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";

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
        internalId: number
    };
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
        url: `${BaseUrl}/v2/user/signin/unit`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {

        const response = await axios.request(config);
        
        if ( response.data != false ) {
            return {
                statusCode: true,
                accessToken: response.data.accessToken,
                user: response.data.user
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