import axios from 'axios';

export default async function GetIPAddress (): Promise<string | null> {
  try {
    const response = await axios.get('https://httpbin.org/ip');
    const data = response.data;
    console.log(data)
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
}