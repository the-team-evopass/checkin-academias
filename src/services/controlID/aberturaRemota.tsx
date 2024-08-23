import axios from "axios";
import ConsoleLogHMG from '../../utils/consoleLogHMG/consoleLogHMG';

export default async function aberturaRemota (tokenSession: string, ticketGateIP: string, ticketGatePort: number, ticketGateDirection: string) {

    const data = JSON.stringify({
        "actions": [
            {
                "action": "catra",
                "parameters": `allow=${ticketGateDirection}`
            }
        ]
    })
    
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://${ticketGateIP}:${ticketGatePort}/execute_actions.fcgi?session=${tokenSession}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
      
    try {
        const response = await axios.request(config);
        ConsoleLogHMG(response)
        return response.data.session;
    } catch (error) {
        console.log(error)
        return error;
    }

}