import axios from "axios";
import ConsoleLogHMG from '../../utils/consoleLogHMG/consoleLogHMG';

export default async function loginControlID (ticketGateIP: string, ticketGatePort: number) {

    ConsoleLogHMG('Req de login feita - Control iD')

    const data = JSON.stringify({
        "login": "admin",
        "password": "admin"
    });
    
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://${ticketGateIP}:${ticketGatePort}/login.fcgi`,
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