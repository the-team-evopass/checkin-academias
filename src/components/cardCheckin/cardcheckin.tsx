import GetTicketGateConfiguration from '../../services/api/evopass/getTicketGateConfiguration'
import denyOrAuthorizeCheckin from '../../services/api/evopass/denyOrAuthorizeCheckin'
import loginControlID from '../../services/controlID/loginControlID'
import aberturaRemota from '../../services/controlID/aberturaRemota'
import ConsoleLogHMG from '../../utils/consoleLogHMG/consoleLogHMG'
import '../../assets/styles/components/cardCheckin/styleCardCheckin.css'

interface CardCheckinProps {
    nome: string;
    userPhotoURL: string;
    gymID: string;
    idStudent: string;
}

export function CardCheckin({ nome, userPhotoURL, gymID, idStudent }: CardCheckinProps) {

    async function handleAuthorizeCheckin () {
        ConsoleLogHMG('Autorizando checkin...')
        await denyOrAuthorizeCheckin(gymID, idStudent)
        const ticketGateConfiguration = await GetTicketGateConfiguration(gymID)
        await loginControlID(
            ticketGateConfiguration.ticket_gate_ip,
            ticketGateConfiguration.ticket_gate_port
        )
        .then( myToken => { 
            aberturaRemota(
                myToken,
                ticketGateConfiguration.ticket_gate_ip,
                ticketGateConfiguration.ticket_gate_port
            )
        })
    }

    return (
        <section className='container-card-checkin'>
            <h4 className='title-card-checkin'>Solicitação de check-in</h4>
            <div className='form-card-checkin'>
                <div className="row-info-card-checkin">
                    <img src={userPhotoURL} alt="" className="user-img-card-checkin"/>
                    <p className='text-message-card-checkin'>
                        {nome} acabou de solicitar o check-in na unidade.
                    </p>
                </div>
                <footer>
                    <button type="submit" onClick={() => handleAuthorizeCheckin()}>
                        Aprovar
                    </button>
                </footer>
            </div>
        </section>
    )
}