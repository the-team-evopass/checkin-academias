export default function validateCPF(cpf: string) {

    const validatedCPF = cpf.replace(/\D/g, '');

    if (cpf == '') {
        return true
    }

    if (validatedCPF.length !== 11) {
        return false;
    }

    function calculateDigit(cpf: string, positions: number): number {
        let sum = 0;
        for (let i = 0; i < positions - 1; i++) {
            sum += parseInt(cpf[i]) * (positions - i);
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }

    const firstDigit = calculateDigit(validatedCPF, 10);
    if (parseInt(validatedCPF[9]) !== firstDigit) {
        return false;
    }

    const secondDigit = calculateDigit(validatedCPF, 11);
    if (parseInt(validatedCPF[10]) !== secondDigit) {
        return false;
    }

    return true;
}