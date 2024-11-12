import { useDispatch, useSelector } from 'react-redux';
import { changeStateIsNotificationBarActivated } from '../../../redux/slices/sliceAPP';
import { RootState } from '../../../redux/store';
import iconNotification from '../../../assets/icons/icon-bell.svg'
import { NotificationCard } from '../notificationCard/notificationCard';
import '../../../assets/styles/components/notification/notificationBar/styleNotificationBar.css'

interface NotificationBarProps {
    isCollapsed: boolean
}

export function NotificationBar({ isCollapsed }: NotificationBarProps) {

    const dispatch = useDispatch();
    const isNotificationBarActivated = useSelector((state: RootState) => state.app.isNotificationBarActivated);

    function handleAlternateStateNotificationBar() {
        dispatch(changeStateIsNotificationBarActivated(!isNotificationBarActivated));
        console.log('Estado mudado - ', isNotificationBarActivated);
    }

    return (
        <>
            <aside className={`notification-bar ${isCollapsed ? 'activate' : ''}`}>
                <header className='header-notification-bar'>
                    <img 
                        className='img-header-notification-bar'
                        src={iconNotification}
                        onClick={() => handleAlternateStateNotificationBar()}
                        alt="Ícone de notificações"
                    />
                    <h3 className='h3-p-header-notification-bar'>
                        Notificações
                    </h3>
                </header>

                <ul className='main-notification-bar'>
                    <NotificationCard
                        notificationSubject='Nova feature'
                        notificatioContent='Teste de conteudo de notificação
                        teste te ttet gdfsiougsd poyisdf oisdfo óisdf óid ói
                        oufypqieuy piwuf ypqwiuefy piu fy'
                        notificationDate={2}
                    />
                    <NotificationCard
                        notificationSubject='Nova feature'
                        notificatioContent='Teste de conteudo de notificação
                        teste te ttet gdfsiougsd poyisdf oisdfo óisdf óid ói
                        oufypqieuy piwuf ypqwiuefy piu fy'
                        notificationDate={2}
                    />
                    <NotificationCard
                        notificationSubject='Nova feature'
                        notificatioContent='Teste de conteudo de notificação
                        teste te ttet gdfsiougsd poyisdf oisdfo óisdf óid ói
                        oufypqieuy piwuf ypqwiuefy piu fy'
                        notificationDate={2}
                    />
                    <NotificationCard
                        notificationSubject='Nova feature'
                        notificatioContent='Teste de conteudo de notificação
                        teste te ttet gdfsiougsd poyisdf oisdfo óisdf óid ói
                        oufypqieuy piwuf ypqwiuefy piu fy'
                        notificationDate={2}
                    />
                    <NotificationCard
                        notificationSubject='Nova feature'
                        notificatioContent='Teste de conteudo de notificação
                        teste te ttet gdfsiougsd poyisdf oisdfo óisdf óid ói
                        oufypqieuy piwuf ypqwiuefy piu fy'
                        notificationDate={2}
                    />
                    <NotificationCard
                        notificationSubject='Nova feature'
                        notificatioContent='Teste de conteudo de notificação
                        teste te ttet gdfsiougsd poyisdf oisdfo óisdf óid ói
                        oufypqieuy piwuf ypqwiuefy piu fy'
                        notificationDate={2}
                    />
                </ul>

                <footer className='footer-notification-bar'>
                    <button className='btn-clear-notifications'>Limpar Notificações</button>
                    <button className='btn-close-notifications' onClick={handleAlternateStateNotificationBar}>Fechar</button>
                </footer>
            </aside>
        </>
    );
}
