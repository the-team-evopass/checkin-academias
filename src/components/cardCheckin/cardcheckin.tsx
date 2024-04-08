import denyOrAuthorizeCheckin from '../../services/api/denyOrAuthorizeCheckin'
import { loginControlID } from '../../services/controlID/loginControlID'
import { aberturaRemota } from '../../services/controlID/aberturaRemota'
import '../../assets/styles/components/cardCheckin/styleCardCheckin.css'

interface CardCheckinProps {
    nome: string;
    userPhotoURL: string;
    gymId: string;
    idStudent: string;
}

export function CardCheckin({ nome, userPhotoURL, gymId, idStudent }: CardCheckinProps) {

    async function handleAuthorizeCheckin () {
        console.log('Autorizando checkin')
        await denyOrAuthorizeCheckin(gymId, idStudent)
        aberturaRemota(await loginControlID())
    }
    
    console.log(userPhotoURL);

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