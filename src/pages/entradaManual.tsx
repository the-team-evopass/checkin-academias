import { Header } from '../components/header/header'
import { FormEntradaManual } from '../components/formEntradaManual/formEntradaManual'
import { ToastContainer } from 'react-toastify'
import '../assets/styles/pages/entrada manual/styleEntradaManual.css'

export function EntradaManual () {
    return (
        <>
            <ToastContainer/>
            <div className='entrada-manual-container'>
                <Header/>
                <FormEntradaManual/>
            </div>
        </>
    )
}