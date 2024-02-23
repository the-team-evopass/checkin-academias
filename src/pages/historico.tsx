import '../assets/styles/pages/historico/styleHistorico.css'
import TableComponent from '../class/table/classTable'
import { CardCheckinHistory } from '../components/cardCheckin/cardCheckinHistory'
import { TableContainer } from '../components/tableContainer/tableContainer'
import { Header } from '../components/header/header'



const columns = ['ID', 'Nome', 'Data', 'Hora']; 
const data = [ 
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45'],
];
export function Historico () {
    return (
        <div className='historico-container'>
            Minha pagina de histórico
            <Header />
            <CardCheckinHistory nome={''} gymId={''} idStudent={''} />
            <TableContainer> 
             <TableComponent columns={columns} data={data} nome='checkin-history'/> {/* Renderiza o componente TableComponent com as colunas e dados definidos */}
            </TableContainer>
        </div>
    )
}

