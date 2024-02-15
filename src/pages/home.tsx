import { useSelector } from 'react-redux';
import RealtimeDatabaseListener from '../services/firebase/listeningRealtimeDatabase';
import { Hearder } from '../components/header/header';
import { HelloUserCard } from '../components/helloUserCard/helloUserCard';
import { TableContainer } from '../components/tableContainer/tableContainer';
import { CardCheckin } from '../components/cardCheckin/cardcheckin';

import { Alert } from '../components/alert/alert';

import { ToastContainer } from 'react-toastify';
import '../assets/styles/pages/home/styleHome.css'

import TableComponent from '../class/table/classTable';

// Dados para a tabela - teste
const columns = ['ID', 'Nome', 'Data', 'Hora'];
const data = [
  ['124372816', 'Camila Silva', '18/01/2023',  '10:30'],
  ['122654893', 'Rebeca Amaral', '18/01/2023', '12:45']
];


interface CheckinProps {
  idUser: number;
  image: string;
  isChecked: boolean;
  name: string;
  time: string;
}

interface RootState {
  checkin: CheckinProps[]
}

export function Home () {

  
  const checkinList: CheckinProps[] = useSelector((state: RootState) => state.checkin);
    
  RealtimeDatabaseListener();

  return (
    <>
      <ToastContainer />
      <ul className='ul-render'>
        {checkinList &&
          checkinList.map((checkin, index) => (
          <Alert key={index}>
            <CardCheckin nome={checkin.name} gymId='0' idStudent={checkin.idUser.toString()}/>
          </Alert>
        ))}
      </ul>
      <div className='home-container'>
        <Hearder/>
        <HelloUserCard/>
        <TableContainer>
          <TableComponent columns={columns} data={data} nome='checkin-history'/>
        </TableContainer>
      </div>
    </>
  );
}
