import { useSelector } from 'react-redux'; // Importa o hook useSelector do react-redux para acessar o estado global da aplicação
import RealtimeDatabaseListener from '../services/firebase/listeningRealtimeDatabase'; // Importa uma função RealtimeDatabaseListener de um serviço para ouvir mudanças no banco de dados em tempo real
import { Hearder } from '../components/header/header'; // Importa o componente Hearder
import { HelloUserCard } from '../components/helloUserCard/helloUserCard'; // Importa o componente HelloUserCard
import { TableContainer } from '../components/tableContainer/tableContainer'; // Importa o componente TableContainer
import { CardCheckin } from '../components/cardCheckin/cardcheckin'; // Importa o componente CardCheckin
import { Alert } from '../components/alert/alert'; // Importa o componente Alert
import { ToastContainer } from 'react-toastify'; // Importa o componente ToastContainer da biblioteca react-toastify
import '../assets/styles/pages/home/styleHome.css'; // Importa o arquivo de estilo CSS para a página home
import TableComponent from '../class/table/classTable'; // Importa o componente TableComponent

// Dados para a tabela - teste
const columns = ['ID', 'Nome', 'Data', 'Hora']; // Define as colunas da tabela
const data = [ // Define os dados da tabela
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

// Define a interface CheckinProps para tipar os objetos do estado checkin
interface CheckinProps {
  idUser: number;
  image: string;
  isChecked: boolean;
  name: string;
  time: string;
}

// Define a interface RootState para tipar o estado global da aplicação
interface RootState {
  checkin: CheckinProps[]; // O estado global possui uma propriedade checkin que é uma lista de objetos do tipo CheckinProps
}

export function Home () {

  const checkinList: CheckinProps[] = useSelector((state: RootState) => state.checkin); // Utiliza o hook useSelector para acessar o estado global e extrair a lista de check-ins

  RealtimeDatabaseListener(); // Chama a função que inicia a escuta por mudanças no banco de dados em tempo real

  return (
    <>
      <ToastContainer /> {/* Renderiza o componente ToastContainer para exibir notificações */}
      <ul className='ul-render'>
        {checkinList && // Verifica se a lista de check-ins está definida e não é vazia
          checkinList.map((checkin, index) => ( // Mapeia cada objeto de check-in para renderizar um componente Alert com um CardCheckin dentro
          <Alert key={index}> {/* Define um componente Alert com uma chave única */}
            <CardCheckin nome={checkin.name} gymId='0' idStudent={checkin.idUser.toString()}/> {/* Renderiza um componente CardCheckin com as propriedades necessárias */}
          </Alert>
        ))}
      </ul>
      <div className='home-container'>
        <Hearder/> {/* Renderiza o componente Hearder */}
        <HelloUserCard/> {/* Renderiza o componente HelloUserCard */}
        <TableContainer> {/* Renderiza o componente TableContainer */}
          <TableComponent columns={columns} data={data} nome='checkin-history'/> {/* Renderiza o componente TableComponent com as colunas e dados definidos */}
        </TableContainer>
      </div>
    </>
  );
}
