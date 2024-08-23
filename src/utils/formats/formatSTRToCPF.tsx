export default function formatSTRToCPF(cpf: string) {
    
    const cpfStr = cpf.replace(/\D/g, '');

    if (cpfStr.length <= 3) {
        return cpfStr; // Retorna apenas os primeiros 3 dígitos
    } else if (cpfStr.length <= 6) {
        return cpfStr.replace(/(\d{3})(\d+)/, '$1.$2'); // Adiciona o ponto após os primeiros 3 dígitos
    } else if (cpfStr.length <= 9) {
        return cpfStr.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3'); // Adiciona o ponto após os 6 dígitos
    } else {
        return cpfStr.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4'); // Adiciona o ponto e o hífen conforme o formato final
    }
}
