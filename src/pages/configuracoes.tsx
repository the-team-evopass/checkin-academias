import { ToastContainer } from 'react-toastify'
import { Header } from '../components/header/header'
import { CardTicketGateConfiguration } from '../components/cardTicketGateConfiguration/cardTicketGateConfiguration'
import '../assets/styles/pages/configuracoes/styleConfiguracoes.css'

export function Configuracoes () {

    return (
        <>  
            <ToastContainer/>
            <div className='configuracoes-container'>
                <Header/>
                <CardTicketGateConfiguration/>
            </div>
        </>
    )
}