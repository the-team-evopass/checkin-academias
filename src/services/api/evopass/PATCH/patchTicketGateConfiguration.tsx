import axios from 'axios';
import BaseUrl from '../../baseurl/BaseUrl';

export default async function patchTicketGateConfiguration ( unitID: string, direction: string, ticketGateIP: string, ticketGatePort: number, preferenceDirection: string) {
    
  const data = JSON.stringify({
    'direction': direction,
    'ticket_gate_ip': ticketGateIP,
    'ticket_gate_port': ticketGatePort,
    'preferenceDirection': preferenceDirection
  })
  
  const config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/ticket-configuration/${unitID}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  try {
    const response = await axios.request(config);
    console.log(response)
    return(response.data)
  } catch (error) {
    console.log(error);
    throw error;
  }

}