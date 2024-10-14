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

import GetStudentByCPF from "../../services/api/evopass/GET/getStudentByCPF";

import arrowIcon from "../../assets/imgs/svgs/arrow-right.svg";
import "../../assets/styles/components/formEntradaManual/styleFormEntradaManual.css";

interface StudentInfosForCheckinProps {
  firstName: string;
  lastName: string;
  CPF: string;
  contact: string;
}

export function FormEntradaManualEvoclub() {
  // TODO - Colocar gerenciamento de estado global para a minha aplicação, modificar o isLoading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cpf, setCPF] = useState<string>();
  const [showCarUserInfos, setShowCardInfos] = useState<boolean>(false);

  const [studentInfosForCheckinEvoclub, setStudentInfosForCheckinEvoclub] =
    useState<StudentInfosForCheckinProps>({
      firstName: "John",
      lastName: "Doe",
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
        const studentResponse = await GetStudentByCPF(
          formatCPFToSTR(cpf ? cpf : "")
        );
        const studentData = studentResponse.data[0];

        setStudentInfosForCheckinEvoclubASAAS({
          cpf: checkinEvoclubASAASResponse.cpf,
          subscriptionPlan: checkinEvoclubASAASResponse.subscriptionPlan,
          subscriptionValue: checkinEvoclubASAASResponse.subscriptionValue,
          subscriptionId: checkinEvoclubASAASResponse.subscriptionId,
          services: checkinEvoclubASAASResponse.services,
        });

        setStudentInfosForCheckinEvoclub({
          firstName: studentData.firstName,
          lastName: studentData.lastName,
          CPF: formatSTRToCPF(studentData.cpf),
          contact: studentData.contacts[0].contact,
        });

        // TODO - Colocar uma validação de conteúdo para ver se as informações foram encontradas (usuário/ assinatura)
        // Tenho que arrumar o rota de getUser, tenho que pegar essas informações no asaas

        setShowCardInfos(true);
        setIsLoading(false);
      } catch (error) {
        ApplicationAlert(
          "error",
          "Ocorreu um erro ao buscar as informações. Tente novamente."
        );
        console.error(
          "Erro ao buscar dados do estudante no gestão ou asaas:",
          error
        );
        setIsLoading(false);
      }
    } else {
      ApplicationAlert(
        "error",
        "Digite um CPF válido para realizar o Check-in"
      );
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  async function handleCheckin() {
    console.log("Realizando Check-in");
    // TODO - Colocar req de delete service do asaas
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
              firstName={studentInfosForCheckinEvoclub.firstName}
              lastName={studentInfosForCheckinEvoclub.lastName}
              email={studentInfosForCheckinEvoclub.contact}
              evoclubPlan={studentInfosForCheckinEvoclubASAAS.subscriptionPlan}
              services={studentInfosForCheckinEvoclubASAAS.services}
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
