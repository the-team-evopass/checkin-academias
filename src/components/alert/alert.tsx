import { ReactNode } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface AlertProps {
    children: ReactNode;
}

export function Alert({ children }: AlertProps) {


    return toast(children, {
        position: "top-right",
        autoClose: 15000,
        closeButton: false
    });

}