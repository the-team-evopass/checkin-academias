// import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { CheckinAlert } from "../components/alerts/checkinAlert/alert";
import { Header } from "../components/header/header";
import { HelloUserCard } from "../components/helloUserCard/helloUserCard";
import { TableContainer } from "../components/tableContainer/tableContainer";
import { CardCheckin } from "../components/cardCheckin/cardcheckin";
import TableComponent from "../class/table/classTable";
import RealtimeDatabaseListener from "../services/firebase/listeningRealtimeDatabase";
import "../assets/styles/pages/home/styleHome.css";

interface CheckinProps {
  name: string;
  image: string;
  idUser: number;
  isChecked: boolean;
  time: string;
}

interface UserInfosProps {
  internalID: number;
}

interface RootState {
  checkin: CheckinProps[];
  userInfos: UserInfosProps;
}

// Dados para a tabela - teste
const columns = ["ID", "Nome", "Data", "Hora"];
const data = [
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["124372816", "Camila Silva", "18/01/2023", "10:30"],
  ["122654893", "Rebeca Amaral", "18/01/2023", "12:45"],
];

export function Home() {
  // Filtrar o ultimo checkin do meu gerenciamento de estado

  const checkinList: CheckinProps[] = useSelector(
    (state: RootState) => state.checkin
  );
  const gymID = useSelector((state: RootState) => state.userInfos.internalID);

  RealtimeDatabaseListener();

  return (
    <>
      <ToastContainer />
      <ul className="ul-render">
        {checkinList &&
          checkinList.map((checkin, index) => (
            <CheckinAlert key={index} type="notifycheckin">
              <CardCheckin
                nome={checkin.name}
                userPhotoURL={checkin.image}
                gymID={`${gymID}`}
                idStudent={checkin.idUser.toString()}
              />
            </CheckinAlert>
          ))}
      </ul>
      <div className="home-container">
        <Header />
        <HelloUserCard />
        <TableContainer>
          {/* Renderizar aviso de: funcionalidade em desenvolvimento. */}
          <TableComponent
            columns={columns}
            data={data}
            nome="checkin-history"
          />
        </TableContainer>
      </div>
    </>
  );
}
