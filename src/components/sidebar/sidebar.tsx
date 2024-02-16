import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarButton from './sidebarButton';
import iconBook from '../../assets/icons/book.svg'
import iconConfig from '../../assets/icons/config.svg'
import iconHome from '../../assets/icons//home.svg'
import setaLadoEsquerdo from '../../assets/icons/seta-lado-esquerdo.svg'
import logoNome from '../../assets/imgs/logo/logo-inteira-nome-toda-branca.svg'
import logoCirculo from '../../assets/imgs/logo/logo-circulo.png'
import logout from '../../assets/icons/logout.svg'
import '../../assets/styles/components/sidebar/styleSidebar.css'

export function Sidebar () {

    const location = useLocation();
    const navigate = useNavigate();

    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    function toggleSidebar() {
        setSidebarCollapsed(!isSidebarCollapsed);
    }

    return (
        <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <header className='sidebar-header'>
                <img src={logoNome} alt="Logo da evopass com o nome escrito" className='sidebar-header-img-logo-nome' onClick={() => navigate('/')}/> 
                <img src={setaLadoEsquerdo} alt="seta da sidebar apontando para o lado esquerdo" className='sidebar-header-img-seta-lado-esquerdo' onClick={toggleSidebar} />
                {isSidebarCollapsed && (
                    <img src={logoCirculo} alt="Logo circular da Evopass" className='sidebar-header-img-logo-circular' onClick={() => navigate('/')}/> 
                )}
            </header>
            <ul className='sidebar-list-buttons'>
                <li className='sidebar-list-buttons-li'>
                    <SidebarButton
                        imgSRC={iconHome}
                        title='Home'
                        route='/'
                        statusButton={location.pathname == '/' ? true : false}
                        isSidebarCollapsed={isSidebarCollapsed}
                    />
                </li>
                <li className='sidebar-list-buttons-li'>
                    <SidebarButton
                        imgSRC={iconBook}
                        title='Histórico'
                        route='/historico'
                        statusButton={location.pathname == '/historico' ? true : false}
                        isSidebarCollapsed={isSidebarCollapsed}
                    />
                </li>
                <li className='sidebar-list-buttons-li'>
                    <SidebarButton
                        imgSRC={iconConfig}
                        title='Configuracoes'
                        route='/configuracoes'
                        statusButton={location.pathname == '/configuracoes' ? true : false}
                        isSidebarCollapsed={isSidebarCollapsed}
                    />
                </li>
            </ul>
            <footer className='sidebar-footer'>
                <ul>
                    <li className='logout' onClick={() => navigate('/login')}>
                        <img src={logout} alt='icone de logout' />
                        <h3>
                            Logout
                        </h3>
                    </li>
                </ul>
            </footer>
        </aside>
    )
}