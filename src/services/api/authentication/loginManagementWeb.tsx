import axios from "axios";
import BaseUrl from "../baseurl/BaseUrl";

interface GetLoginManagementWebProps {
    email: string;
    password: string;
    role: string;
}

interface UserResponse {
    statusCode: boolean;
    user?: {
        stsTokenManager: {
            accessToken: string;
        };
        providerData: {
            photoURL: string;
        }[];
        uid: string;
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
        url: `${BaseUrl}/v2/user/signin/management`,
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