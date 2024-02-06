import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ref, onValue } from 'firebase/database';
import { addCheckin } from '../../redux/sliceCheckin';
import database from './realtimeDatabaseInit';

interface CheckinProps {
  idUser:number
  image:string
  isChecked:boolean 
  name:string
  time:string
}

const db = database;

function useRealtimeDatabaseListener() {

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = onValue(ref(db, '0/checkin/'), (snapshot) => {
      const thisData: CheckinProps[] = snapshot.val();
      console.log(thisData)
      dispatch(addCheckin({
        idUser: thisData[1].idUser,
        image: thisData[1].image,
        isChecked: thisData[1].isChecked,
        name: thisData[1].name,
        time: thisData[1].time,
      }));
    });

    // Retorna uma função de limpeza que será chamada ao desmontar o componente
    return () => unsubscribe();
  }, [dispatch]); // Certifique-se de incluir dispatch como dependência

  // Se você precisar expor mais alguma coisa, pode adicionar aqui

  return null; // ou qualquer outro valor que você precise
}

export default useRealtimeDatabaseListener;