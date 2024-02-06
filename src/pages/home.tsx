import { useSelector } from 'react-redux';
import useRealtimeDatabaseListener from '../services/firebase/listeningRealtimeDatabase';
// import { loginControlID } from './services/controlID/loginControlID';
// import { aberturaRemota } from '../services/controlID/aberturaRemota';

import { CardCheckin } from '../components/cardCheckin/cardcheckin';

import { Alert } from '../components/alert/alert';

import { ToastContainer } from 'react-toastify';
import '../assets/styles/pages/home/styleHome.css'

interface CheckinProps {
  idUser: number;
  image: string;
  isChecked: boolean;
  name: string;
  time: string;
}

interface RootState {
  checkin: CheckinProps[]; // Certifique-se de que esta estrutura corresponde ao seu estado real.
}

export function Home () {
  // Use o hook personalizado
  useRealtimeDatabaseListener();
  
  const checkinList: CheckinProps[] = useSelector((state: RootState) => state.checkin);

  function render () {return null}

  return (
    <div className='home-container'>
      <ToastContainer />
      <ul>
        {checkinList &&
          checkinList.map((checkin) => (
          <Alert>
            <CardCheckin nome={checkin.name} />
          </Alert>
        ))}
      </ul>
      <button onClick={() => {render()}}>
        <h1>Abrir catraca</h1>
      </button>
    </div>
  );
}
