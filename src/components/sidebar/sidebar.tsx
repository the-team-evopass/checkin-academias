import '../../assets/styles/components/sidebar/styleSidebar.css'
import SidebarButton from './sidebarButton';
import iconBook from '../../assets/icons/book.svg'
import iconConfig from '../../assets/icons/config.svg'
import iconHome from '../../assets/icons//home.svg'
import setaLadoEsquerdo from '../../assets/icons/seta-lado-esquerdo.svg'
import logoNome from '../../assets/imgs/logo/logo-inteira-nome.svg'

import logout from '../../assets/icons/logout.svg'
import user from '../../assets/icons/user.svg'

export function Sidebar () {
    return (
        <div className='sidebar'>
            <header className='sidebar-header'>
                <img src={logoNome} alt="Logo da evopass com o nome escrito" />
                <img src={setaLadoEsquerdo} alt="seta da sidebar apontando para o lado esquerdo" />
            </header>
            <ul className='sidebar-list-buttons'>
                <li className='sidebar-list-buttons-li'>
                    <SidebarButton
                        imgSRC={iconHome}
                        title='Home'
                        route='/'
                        statusButton={true}
                        isSidebarCollapsed={false}
                    />
                </li>
                <li className='sidebar-list-buttons-li'>
                    <SidebarButton
                        imgSRC={iconBook}
                        title='Histórico'
                        route='/configuracoes'
                        statusButton={true}
                        isSidebarCollapsed={false}
                    />
                </li>
                <li className='sidebar-list-buttons-li'>
                    <SidebarButton
                        imgSRC={iconConfig}
                        title='Histórico'
                        route='/configuracoes'
                        statusButton={true}
                        isSidebarCollapsed={false}
                    />
                </li>
            </ul>
            <footer className='sidebar-footer'>
                <ul>
                    <li className='logout'>
                        <img src={user} alt="" />
                        <h3>
                            Felipe Melo
                        </h3>
                    </li>
                    <li className='footer-user-img'>
                        <img src={logout} alt='icone de logout' />
                        <h3>
                            Logout
                        </h3>
                    </li>
                </ul>
            </footer>
        </div>
    )
}