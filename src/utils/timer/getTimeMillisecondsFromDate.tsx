type Time = number;

export default function ConvertToMilliseconds(timeStr: string): Time {
  const date = new Date(timeStr); // Converte a string para um objeto Date
  if (isNaN(date.getTime())) {
    throw new Error("Formato de data inválido");
  }
  return date.getTime(); // Retorna o timestamp em milissegundos
}
