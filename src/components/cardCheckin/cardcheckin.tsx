import fotoDePerfil from '../../assets/imgs/fotos de perfil/foto-de-perfil.png'
import '../../assets/styles/cardCheckin/styleCardCheckin.css'

import DenyOrAuthorizeCheckin from '../../services/api/denyOrAuthorizeCheckin'

interface CardCheckinProps {
    nome: string;
    gymId: string; // Adicionando gymId como propriedade
    idStudent: string; // Adicionando idStudent como propriedade
}

export function CardCheckin({ nome, gymId, idStudent }: CardCheckinProps) {

    return (
        <section className='container-card-checkin'>
            <h4 className='title-card-checkin'>Solicitação de check-in</h4>
            <div className='form-card-checkin'>
                <div className="row-info-card-checkin">
                    <img src={fotoDePerfil} alt="" className="user-img-card-checkin"/>
                    <p className='text-message-card-checkin'>
                        {nome} acabou de solicitar o check-in na unidade.
                    </p>
                </div>
                <footer>
                    <button type="submit" onClick={ () => DenyOrAuthorizeCheckin(gymId, idStudent)}>
                        Aprovar
                    </button>
                </footer>
            </div>
        </section>
    )
}