import { SubLine } from "../subLine/subLine";
import defaultUserIMG from "../../assets/imgs/userPhoto/defaultUserPhoto.png";
import { CustomInput } from "../../class/input/classInput";
import { StudentInfosForCheckinEvoclubService } from "../../types/components/studentInfosForCheckinEvoclubTypes";
import "../../assets/styles/components/cardStudentInformation/styleCardStudentInformation.css";
import { useEffect } from "react";

interface CardStudentInformationProps {
  name: string;
  email: string;
  evoclubPlan: string;
  services: StudentInfosForCheckinEvoclubService[];
  onServiceChange: (serviceId: string) => void;
}

export function CardStudentInformationEvoclub({
  name,
  email,
  evoclubPlan,
  services,
  onServiceChange,
}: CardStudentInformationProps) {
  const serviceCount = services.reduce((acc, service) => {
    const serviceName = service.paymentLink.name;
    if (!acc[serviceName]) {
      acc[serviceName] = { ...service, count: 1 };
    } else {
      acc[serviceName].count += 1;
    }
    return acc;
  }, {} as Record<string, StudentInfosForCheckinEvoclubService & { count: number }>);

  const groupedServices = Object.values(serviceCount);

  useEffect(() => {
    if (groupedServices.length === 1) {
      onServiceChange(groupedServices[0].id);
    }
  }, [groupedServices, onServiceChange]);

  const handleServiceSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedServiceId = event.target.value;
    console.log("ID do serviço selecionado:", selectedServiceId);
    onServiceChange(selectedServiceId);
  };

  return (
    <div className="card-student-information-container">
      <h1>Informações do usuário</h1>
      <br />
      <header className="card-student-information-header">
        <img src={defaultUserIMG} alt="" />
        <SubLine textLine1={`${name}`} textLine2={`${email}`} />
      </header>
      <hr className="card-student-information-hr" />
      <footer className="card-student-information-footer">
        <CustomInput
          classScopeName="student-information"
          isLabel={true}
          label="PLANO DO EVOCLUB"
          placeholder={evoclubPlan}
          type="text"
          onChange={() => {}}
          disabled
        />
        <div className="custom-dropdown">
          <label className="custom-dropdown-label" htmlFor="services">
            Serviços disponíveis:
          </label>
          <select
            className="custom-dropdown-field"
            id="services"
            name="services"
            onChange={handleServiceSelection}
            // disabled={groupedServices.length === 0}
          >
            {groupedServices.length > 0 ? (
              groupedServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {`${service.paymentLink.name} | Quantidade: ${service.count}`}
                </option>
              ))
            ) : (
              <option value="">Não há serviços disponíveis</option>
            )}
          </select>
          {/* Se houver uma mensagem de erro, você pode adicionar aqui */}
          {/* <span className="custom-dropdown-error-message">Mensagem de erro</span> */}
        </div>
      </footer>
    </div>
  );
}
