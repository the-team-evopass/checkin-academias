import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";

export default async function GetStudentInAsaasByCPF(CPF: string) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/customers?subAccount=SIMULATE&cpfCnpj=${CPF}`,
    headers: {}
  };

  try {
    const response = await axios.request(config);
    const customers = response.data.data;

    if (customers && customers.length > 0) {
      // Seleciona o cliente mais recente baseado na data de criação
      const recentCustomer = customers.reduce((latest: { dateCreated: string | Date; }, customer: { dateCreated: string | Date; }) =>
        new Date(customer.dateCreated) > new Date(latest.dateCreated) ? customer : latest
      );

      return {
        name: recentCustomer.name || "N/A",
        CPF: recentCustomer.cpfCnpj || "N/A",
        contact: recentCustomer.email || recentCustomer.phone || recentCustomer.mobilePhone || "N/A"
      };
    } else {
      console.warn("Nenhum cliente encontrado com esse CPF.");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar dados do estudante:", error);
    throw error;
  }
}