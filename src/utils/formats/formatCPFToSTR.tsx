export default function formatCPFToSTR (CPF: string) {
    return CPF.replace(/\D/g, '');
}