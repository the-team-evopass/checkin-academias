import React from 'react';
import iconBell from '../../../assets/icons/icon-bell.svg';
import '../../../assets/styles/components/notification/notificationBadge/styleNotificationBadge.css';

interface NotificationBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    countNotification: number;
}

export function NotificationBadge({ countNotification, ...props }: NotificationBadgeProps) {
    return (
        <div className="notification-badge" {...props}>
            <img src={iconBell} alt="Ícone de notificação" />
            {countNotification > 0 && (
                <span className="badge">{countNotification}</span>
            )}
        </div>
    );
}