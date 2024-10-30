import { ToastContainer } from "react-toastify"
import { Header } from "../components/header/header"
import { FormEntradaManualEvoclub } from "../components/formEntradaManualEvoclub/formEntratdaManualEvoclub"
import '../assets/styles/pages/checkinEvoclub/styleCheckinEvoclub.css'

export function CheckinEvoclube () {
    return (
        <>
            <ToastContainer/>
            <div className='checkin-evoclub-container'>
                <Header/>
                <FormEntradaManualEvoclub/>
            </div>
        </>
    )
}