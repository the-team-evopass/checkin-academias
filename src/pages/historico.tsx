import '../assets/styles/pages/historico/styleHistorico.css'
import { CardCheckinHistory } from '../components/cardCheckin/cardCheckinHistory'

export function Historico () {
    return (
        <div className='historico-container'>
            Minha pagina de histórico
            <CardCheckinHistory />
        </div>
    )
}