import '../../assets/styles/components/cardNotification/styleCardNotification.css'

interface CardNotificationsProps {
    type: string;
    message: string;
}

export function CardNotification({ type, message }: CardNotificationsProps) {

    return (
        <section className={`container-card-notification ${type}`}>
            <h4 className='message-card-notification'>
                {message}
            </h4>
        </section>
    )
}