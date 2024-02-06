import { useNavigate } from 'react-router-dom';
import IsLogged  from '../../services/authentication/isLogged'
import '../../assets/styles/components/sidebar/styleSidebarButton.css'

interface ButtonProps {
    imgSRC: string;
    title: string;
    route: string;
    statusButton: boolean;
    isSidebarCollapsed: boolean
    onLogoutClick?: () => void;
}

export default function SidebarButton({ imgSRC, title, route, statusButton, isSidebarCollapsed, onLogoutClick  }: ButtonProps): JSX.Element {

    const navigate = useNavigate();

    async function handleClick(thisRoute: string) {
        if (onLogoutClick) {
            onLogoutClick();
            
        } else {
            // mudar isso aqui... preciso melhorar a função que verifica se o usuário está autenticado
            const userLogged =  IsLogged()
            userLogged == true ? navigate(thisRoute) : navigate('/login')
        }
    }


    return (
        <li
            className={`sidebar-button
            ${statusButton && 'sidebar-button-activate'}
            ${isSidebarCollapsed && 'button-colapsed'}`}
            onClick={() => handleClick(route)}
        >
            <div className='menu-button'>
                <img className={`menu-button-icon-img ${statusButton ? 'menu-button-icon-img-activate' : ''}`} src={imgSRC} alt="" />
                <h2 className={`menu-button-title-button ${statusButton ? 'menu-button-title-button-activate' : ''}`}>{title}</h2>
            </div>
        </li>
    )
}