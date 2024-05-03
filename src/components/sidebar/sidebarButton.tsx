import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/sidebar/styleSidebarButton.css'

interface ButtonProps {
    imgSRC: string;
    title: string;
    route: string;
    statusButton: boolean;
    isSidebarCollapsed: boolean
}

export default function SidebarButton({ imgSRC, title, route, statusButton, isSidebarCollapsed  }: ButtonProps): JSX.Element {

    const navigate = useNavigate();

    async function handleClick(thisRoute: string) {
    
        navigate(thisRoute)
       
    }


    return (
        <div
            className={`sidebar-button
            ${statusButton && 'sidebar-button-activate'}
            ${isSidebarCollapsed && 'button-colapsed'}`}
            onClick={() => handleClick(route)}
        >
            <div className='menu-button'>
                <img className={`menu-button-icon-img ${statusButton ? 'menu-button-icon-img-activate' : ''}`} src={imgSRC} alt="" />
                <h2 className={`menu-button-title-button ${statusButton ? 'menu-button-title-button-activate' : ''}`}>{title}</h2>
            </div>
        </div>
    )
}