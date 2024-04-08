import axios from "axios";

export async function aberturaRemota (tokenSession: string) {

    console.log('Req de abertura remota feita')

    const data = JSON.stringify({
        "actions": [
            {
                "action": "catra",
                "parameters": "allow=clockwise"
            }
        ]
    })
    
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://192.168.0.15:81/execute_actions.fcgi?session=${tokenSession}`,
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