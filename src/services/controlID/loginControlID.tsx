import axios from "axios";

export async function loginControlID () {

    console.log('Req de login feita')

    const data = JSON.stringify({
        "login": "admin",
        "password": "admin"
    });
    
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.0.15:81/login.fcgi',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
      
    
    try {
        const response = await axios.request(config);
        console.log(response)
        return response.data.session;
    } catch (error) {
        console.log(error)
        return error;
    }

}