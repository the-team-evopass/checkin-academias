import axios from "axios";

export default async function aberturaRemota (tokenSession: string, ticketGateIP: string, ticketGatePort: number) {

    console.log('Req de abertura remota feita', `Parametros: { token:${tokenSession}, catracaIP: ${ticketGateIP}, catracaPorta: ${ticketGatePort}`)

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
        url: `http://${ticketGateIP}:${ticketGatePort}/execute_actions.fcgi?session=${tokenSession}`,
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