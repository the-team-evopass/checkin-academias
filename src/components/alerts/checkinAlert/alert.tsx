import { ReactNode } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface AlertProps {
    type: string
    children?: ReactNode;
}

export function CheckinAlert({ children, type }: AlertProps) {

    switch (type) {

        case 'notifycheckin':

            return toast(children, {
                position: "top-right",
                autoClose: 30000,
                closeButton: false
            });

        default:
            return 'Tipo da mensagem especificada fora do padrão'
    }

}