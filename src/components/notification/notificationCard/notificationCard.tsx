import '../../../assets/styles/components/notification/notificationCard/styleNotificationCard.css'

interface NotificationCardProps{
    notificationSubject: string;
    notificatioContent: string;
    notificationDate: number
}

export function NotificationCard ({notificationSubject, notificatioContent, notificationDate}:NotificationCardProps) {
    
    return (
        <li className='card-notification'>      
            <p className='card-notification-text-content'>
                <p className='subject-card-notification'>
                    {notificationSubject}
                </p>
                <p className='notification-content-card-notification'>
                    {notificatioContent}
                </p>
            </p>
            <span className="time-card-notification">{notificationDate} minutos atrás</span>
        </li>
    )
}