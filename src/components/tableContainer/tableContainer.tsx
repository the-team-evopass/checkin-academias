import { ReactNode } from "react"
import iconConfig from '../../assets/icons/filtro.svg'
import '../../assets/styles/components/tableContainer/styleTableContainer.css'

interface TableContainerProps {
    children: ReactNode;
}

export function TableContainer({ children }: TableContainerProps) {
    return (
        <div className='container-checkin-history-table'>
            <header className='header-container-checkin-history-table'>
                <h4>Histórico de check-in's</h4>
                <img src={iconConfig} alt='icone de configuração para filtros de tabela' />
            </header>
            {children}
        </div>
    )
}