
import fotoDePerfil from '../../assets/imgs/fotos de perfil/foto-de-perfil.png';
import cancelIcon from '../../assets/icons/cancel.svg';
import checkIcon from '../../assets/icons/check.svg';
import '../../assets/styles/cardCheckin/styleCardCheckinHistory.css';
import DenyOrAuthorizeCheckin from '../../services/api/denyOrAuthorizeCheckin';

interface CardCheckinHistoryProps {
    nome: string;
    gymId: string; // Adicionando gymId como propriedade
    idStudent: string; // Adicionando idStudent como propriedade
}

export function CardCheckinHistory({ nome, gymId, idStudent }: CardCheckinHistoryProps) {

    return (
        <section className='container-card-checkin'>
            <div className='form-card-checkin'>
                <div className="row-info-card-checkin">
                    <p className='text-message-card-checkin'>
                        {nome} Mensagem de solicitação de Check-in  |
                    </p>
                    <img src={fotoDePerfil} alt="" className="user-img-card-checkin" />
                    Camila Silva, acabou de solicitar o Check-in na unidade
                </div>
                <div className='button-container'> 
                    <span className="icon-button" onClick={() => DenyOrAuthorizeCheckin(gymId, idStudent)}>
                        <img src={cancelIcon} alt="Cancel" className="icon" />
                    </span>
                    <span className="icon-button" onClick={() => DenyOrAuthorizeCheckin(gymId, idStudent)}>
                        <img src={checkIcon} alt="Accept" className="icon" />
                    </span>
                </div>


            </div>
        </section>
    )
}
