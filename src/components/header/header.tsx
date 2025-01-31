import { useSelector } from 'react-redux';
// import { useDispatch } from "react-redux";
// import { RootState } from '../../redux/store';
// import { changeStateIsNotificationBarActivated } from '../../redux/slices/sliceAPP';
import { NotificationBadge } from '../notification/notificationBadge/notificationBadge.tsx';
import '../../assets/styles/components/header/styleHeader.css';

interface UserInfosProps {
    userName: string
    userPhotoURL: string
    loggedInUserToken: string
    userUID: string
}

interface RootStateUserInfos {
    userInfos: UserInfosProps
}

export function Header() {

    // const dispatch = useDispatch();

    // const isNotificationBarActivated = useSelector((state: RootState) => state.app.isNotificationBarActivated)

    // function handleAlternateStateNotificationBar () {
    //     dispatch(changeStateIsNotificationBarActivated(false));
    //     return isNotificationBarActivated
    // }

    const userInfos = useSelector((state: RootStateUserInfos) => state.userInfos);

    return (
        <header className='header'>
            <div className='header-notification'>
                <NotificationBadge
                    countNotification={0}
                    onClick={() => () =>(null)}
                />
            </div>
            <div className='header-user-informations'>
                {
                    userInfos.userPhotoURL && (
                        <img src={userInfos.userPhotoURL}
                            alt='foto de perfil da academia ou da rede'
                            className='header-user-informations-img'
                        />
                    )
                }
                <div className='header-user-information-content'>
                    <h3>{userInfos.userName}</h3>
                    <h5>{userInfos.userUID}</h5>
                </div>
            </div>
        </header>
    );
}