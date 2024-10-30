import { FormEvent, useState } from "react";
import { CustomInput } from "../../class/input/classInput";
import { CardStudentInformationEvoclub } from "../cardCheckinEvoclub/cardCheckinEvoclub";
import { ApplicationAlert } from "../alerts/applicationAlert/alert";
import { LoadinScreen } from "../loadingScreen/loadingScreen";

import { StudentInfosForCheckinEvoclubSubscriptionData as StudentInfosForCheckinEvoclubProps } from "../../types/components/studentInfosForCheckinEvoclubTypes";

import validateCPF from "../../utils/validators/cpfValidator";
import formatSTRToCPF from "../../utils/formats/formatSTRToCPF";
import formatCPFToSTR from "../../utils/formats/formatCPFToSTR";

import { GetStudentPlanAndServiceOnEvoclub } from "../../services/api/evopass/GET/getStudentPlanAndServiceOnEvoclub";


import arrowIcon from "../../assets/imgs/svgs/arrow-right.svg";
import "../../assets/styles/components/formEntradaManual/styleFormEntradaManual.css";
import patchConsumeService from "../../services/api/evopass/POST/patchConsumeService";
import GetStudentInAsaasByCPF from "../../services/api/evopass/GET/GetStudentInAsaasByCPF";

interface StudentInfosForCheckinProps {
  name: string;
  CPF: string;
  contact: string;
}

export function FormEntradaManualEvoclub() {
  // TODO - Colocar gerenciamento de estado global para a minha aplicação, modificar o isLoading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cpf, setCPF] = useState<string>();
  const [showCarUserInfos, setShowCardInfos] = useState<boolean>(false);
  const [selectedIdService, setSelectedIdService] = useState<string>("");

  const [studentInfosForCheckinEvoclub, setStudentInfosForCheckinEvoclub] =
    useState<StudentInfosForCheckinProps>({
      name: "John",
      CPF: "000.000.000-00",
      contact: "felipe@evopass.app.br",
    });

  const [
    studentInfosForCheckinEvoclubASAAS,
    setStudentInfosForCheckinEvoclubASAAS,
  ] = useState<StudentInfosForCheckinEvoclubProps>({
    cpf: "",
    subscriptionPlan: "",
    subscriptionValue: 0,
    subscriptionId: "",
    services: [],
  });

  async function handleSearchStudentsInfos() {
    setIsLoading(true);
  
    console.log("Procurando informações do aluno");
  
    if (validateCPF(cpf ? cpf : "") === true) {
      try {
        const checkinEvoclubASAASResponse =
          await GetStudentPlanAndServiceOnEvoclub(
            formatCPFToSTR(cpf ? cpf : "")
          );
  
        const studentData = await GetStudentInAsaasByCPF(formatCPFToSTR(cpf ? cpf : ""));
  
        // Verifique se os dados foram retornados antes de definir o estado
        if (studentData) {
          setStudentInfosForCheckinEvoclubASAAS({
            cpf: checkinEvoclubASAASResponse.cpf,
            subscriptionPlan: checkinEvoclubASAASResponse.subscriptionPlan,
            subscriptionValue: checkinEvoclubASAASResponse.subscriptionValue,
            subscriptionId: checkinEvoclubASAASResponse.subscriptionId,
            services: checkinEvoclubASAASResponse.services,
          });
  
          setStudentInfosForCheckinEvoclub({
            name: studentData.name,
            CPF: formatSTRToCPF(studentData.CPF),
            contact: studentData.contact,
          });
  
          setShowCardInfos(true);
        } else {
          ApplicationAlert("error", "Nenhum registro encontrado para este CPF.");
        }
  
        setIsLoading(false);
      } catch (error) {
        ApplicationAlert(
          "error",
          "Ocorreu um erro ao buscar as informações. Tente novamente."
        );
        console.error("Erro ao buscar dados do estudante no gestão ou asaas:", error);
        setIsLoading(false);
      }
    } else {
      ApplicationAlert("error", "Digite um CPF válido para realizar o Check-in");
      setIsLoading(false);
    }
  }
  

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  const handleServiceChange = (serviceId: string) => {
    setSelectedIdService(serviceId);
  };

  async function handleCheckin() {
  
    const selectedService = studentInfosForCheckinEvoclubASAAS.services.find(
      (service) => service.id === selectedIdService
    );
    
    if (!selectedService) {
      ApplicationAlert("error", "Serviço selecionado não encontrado.");
      return; 
    }
    
    //Converção para pegarmos a quantidade de serviços
    const totalSessions = studentInfosForCheckinEvoclubASAAS.services.filter(
      (service) => service.paymentLink.id === selectedService.paymentLink.id
    ).length;
    
    const remainingCount = totalSessions - 1;
    
    const userConfirmed = window.confirm(
      `Confirmar check-in?\n` +
      `Serviço: ${selectedService ? selectedService.paymentLink.name : "N/A"}\n` +
      `Quantidade restante após check-in: ${remainingCount > 0 ? remainingCount : "Sem saldo"}\n` +
      `Essa ação implicará na validação do atendimento como REALIZADO e não pode ser desfeita.`
    );

    if (!userConfirmed) {
      // Se o usuário cancelar, não faz nada
      return;
    }

    console.log("Realizando Check-in");
    console.log('ID: ', selectedIdService);
    setIsLoading(true);
  
    try {
      const response = await patchConsumeService(selectedIdService);
      console.log(response);
      ApplicationAlert(
        "success",
        "Check-in realizado com sucesso!"
      );
    } catch (error) {
      console.error('Erro ao realizar o check-in:', error);
      ApplicationAlert(
        "error",
        "Ocorreu um erro ao fazer o checkin do serviço."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="form-entrada-manual-container" onSubmit={handleSubmit}>
      {isLoading && <LoadinScreen />}
      <h1 className="form-entrada-manual-title">Check-in por CPF</h1>
      <br />
      <hr className="form-entrada-manual-hr" />
      <br />
      <div className="form-entrada-manual-input-button-container">
        <div className="form-entrada-manual-input-container">
          {/* TODO - Arrumar estilização do erro abaixo do input, está ocorrendo uma sobreposição */}

          <CustomInput
            classScopeName="input-cpf-form-entrada-manual"
            isLabel={true}
            label="CPF"
            type="text"
            placeholder="000.000.000-00"
            maxLength={14}
            pattern="[0-9./]+"
            onChange={(e) => setCPF(formatSTRToCPF(e))}
            value={cpf}
            error={validateCPF(cpf ? cpf : "") == false}
            errorMessage="CPF inválido"
          />
          <button
            className="button-search-infos-student-checkin"
            onClick={handleSearchStudentsInfos}
          >
            <img src={arrowIcon} alt="Seta virada para direita" />
          </button>
        </div>

        <br />

        {showCarUserInfos && (
          <>
            <CardStudentInformationEvoclub
              name={studentInfosForCheckinEvoclub.name}
              email={studentInfosForCheckinEvoclub.contact}
              evoclubPlan={studentInfosForCheckinEvoclubASAAS.subscriptionPlan}
              services={studentInfosForCheckinEvoclubASAAS.services}
              onServiceChange={handleServiceChange}
            />
          </>
        )}

        <br />

        {showCarUserInfos && (
          <button
            className="button-submit-form-entrada-manual"
            onClick={handleCheckin}
          >
            Fazer Check-in
          </button>
        )}
      </div>
    </form>
  );
}