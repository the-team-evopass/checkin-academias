import { useSelector } from 'react-redux';
import iconBell from '../../assets/icons/icon-bell.svg';
import '../../assets/styles/components/header/styleHeader.css';

interface UserInfosProps {
    userName: string
    userPhotoURL: string
    loggedInUserToken: string
    userUID: string
}

interface RootState {
    userInfos: UserInfosProps
}

export function Header() {

    const userInfos = useSelector((state: RootState) => state.userInfos);

    return (
        <header className='header'>
            <div className='header-notification'>
                <img src={iconBell} alt='sino de notificação' className='header-notification-img' />
            </div>
            <div className='header-user-informations'>
                {
                    userInfos.userPhotoURL && (
                        <img src={userInfos.userPhotoURL} alt='foto de perfil da academia ou da rede' className='header-user-informations-img' />
                    )
                }
                <div className='header-user-information-content'>
                    <h3>{userInfos.userName}</h3>
                    <h5>id: {userInfos.userUID}</h5>
                </div>
            </div>
        </header>
    );
}