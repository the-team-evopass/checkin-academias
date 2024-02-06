import '../../assets/styles/cardCheckin/styleCardCheckin.css'
import fotoDePerfil from '../../assets/imgs/fotos de perfil/foto-de-perfil.png'


export function CardCheckin({ nome }: { nome: string }) {
    return (
        <section className='container-card-checkin'>
            <h4 className='title-card-checkin'>Solicitação de check-in</h4>
            <div className='form-card-checkin'>
                <div className="row-info-card-checkin">
                    <img src={fotoDePerfil} alt="" className="user-img-card-checkin"/>
                    <p className='text-message-card-checkin'>
                        {nome}, acabou de solicitar o check-in na unidade.
                    </p>
                </div>
                <footer>
                    <button type="submit">Aprovar</button>
                    <button type="reset">Recusar</button>
                </footer>
            </div>
        </section>
    )
}