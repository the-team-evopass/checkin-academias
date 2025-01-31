import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import patchDenyOrAuthorizeCheckin from "../../services/api/evopass/PATCH/patchDenyOrAuthorizeCheckin";
import loginControlID from "../../services/controlID/loginControlID";
import aberturaRemota from "../../services/controlID/aberturaRemota";
import ConsoleLogHMG from "../../utils/consoleLogHMG/consoleLogHMG";
import formatReplaceEncodedSpaces from "../../utils/formats/formatReplaceEncodedSpaces";
import "../../assets/styles/components/cardCheckin/styleCardCheckin.css";

interface CardCheckinProps {
  nome: string;
  userPhotoURL: string;
  gymID: string;
  idStudent: string;
}

export function CardCheckin({
  nome,
  userPhotoURL,
  gymID,
  idStudent,
}: CardCheckinProps) {
  const ticketGateConfiguration = useSelector(
    (state: RootState) => state.userInfos.ticketGateConfiguration
  );

  const ticketGateIP = ticketGateConfiguration[0].ticket_gate_ip;
  const ticketGatePort = ticketGateConfiguration[0].ticket_gate_port;
  const ticketGateDirection = ticketGateConfiguration[0].preferenceDirection;

  async function handleAuthorizeCheckin() {
    ConsoleLogHMG("Autorizando checkin...");
    await patchDenyOrAuthorizeCheckin(gymID, idStudent);
    await loginControlID(ticketGateIP, ticketGatePort).then((myToken) => {
      aberturaRemota(
        myToken,
        ticketGateIP,
        ticketGatePort,
        ticketGateDirection
      );
    });
  }

  return (
    <section className="container-card-checkin">
      <h4 className="title-card-checkin">Solicitação de check-in</h4>
      <div className="form-card-checkin">
        <div className="row-info-card-checkin">
          <img src={userPhotoURL} alt="" className="user-img-card-checkin" />
          <p className="text-message-card-checkin">
            {formatReplaceEncodedSpaces(nome)} acabou de solicitar o check-in na
            unidade.
          </p>
        </div>
        <footer>
          <button type="submit" onClick={() => handleAuthorizeCheckin()}>
            Aprovar
          </button>
        </footer>
      </div>
    </section>
  );
}
