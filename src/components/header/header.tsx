import iconBell from '../../assets/icons/icon-bell.svg'
import fotoDePerfil from '../../assets/imgs/fotos de perfil/foto-de-perfil.png'
import '../../assets/styles/components/header/styleHeader.css'

export function Hearder () {

    return (
        <header className='header'>
            <div className='header-notification'>
                <img src={iconBell} alt='sino de notificação' className='header-notification-img'/>
            </div>
            <div className='header-user-informations'>
                <img src={fotoDePerfil} alt='foto de perfil da academia ou da rede' className='header-user-informations-img'/>
                <div className='header-user-information-content'>
                    <h3>Perera Barreto</h3>
                    <h5>id: 109456786</h5>
                </div>
            </div>
        </header>
    )

}