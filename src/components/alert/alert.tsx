import { ReactNode } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface AlertProps {
    type: string
    message?: string;
    children?: ReactNode;
}

export function Alert({ children, type, message }: AlertProps) {

    switch (type) {

        case 'error':

            return toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        case 'warn':

            return toast.warn(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        case 'info':

            return toast.info(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        case 'success':

            return toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        case 'notifycheckin':

            return toast(children, {
                position: "top-right",
                autoClose: 15000,
                closeButton: false
            });

        default:
            return 'Tipo da mensagem especificada fora do padrão'
    }

}