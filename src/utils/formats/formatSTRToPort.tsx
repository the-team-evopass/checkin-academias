export default function formatSTRToPort(port: string) {
    return port.replace(/\D/g, '').slice(0, 4);
}