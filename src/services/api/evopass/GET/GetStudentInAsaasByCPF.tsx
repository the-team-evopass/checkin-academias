import axios from "axios";
import BaseUrl from "../../baseurl/BaseUrl";
import store from "../../../../redux/store";

export default async function GetStudentInAsaasByCPF(CPF: string) {
  const token = store.getState().userInfos.loggedInUserToken; 
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/customers?subAccount=EVOCLUB_REALITY&cpfCnpj=${CPF}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": "3tdHRWODKejibfFGiFcU30RC7ir3TBXi",
  },
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