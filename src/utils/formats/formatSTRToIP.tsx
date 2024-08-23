export default function formatSTRToIP(ip: string) {
    const ipStr = ip.replace(/\D/g, '').slice(0, 9);

    if (ipStr.length <= 3) {
        return ipStr;
    } else if (ipStr.length <= 6) {
        return ipStr.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (ipStr.length <= 7) {
        return ipStr.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else {
        return ipStr.replace(/(\d{3})(\d{3})(\d)(\d+)/, '$1.$2.$3.$4');
    }
}