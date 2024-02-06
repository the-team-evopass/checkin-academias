// Importando as bibliotecas necessárias do React e do Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCheckin, useCheckins } from './sliceCheckin'

// Componente funcional da página de lista de check-ins
const CheckinListPage: React.FC = () => {
  // Obtendo a lista de check-ins do estado global usando o hook useSelector
  const checkinList = useSelector(useCheckins);
  const dispatch = useDispatch();

  // Função para simular um novo check-in
  const handleCheckin = () => {
    const newCheckin = {
      idUser: 2,
      image: 'https://example.com/user2.jpg',
      isChecked: true,
      name: 'Maria Silva',
      time: new Date().toISOString(),
    };

    // Despachando a ação para adicionar um novo check-in à lista
    dispatch(addCheckin(newCheckin));
  };

  return (
    <div>
      <h1>Lista de Check-ins</h1>
      <ul>
        {checkinList.map((checkin) => (
          <li key={checkin.idUser}>
            <img src={checkin.image} alt={checkin.name} />
            <p>{checkin.name}</p>
            <p>{checkin.time}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckin}>Realizar Novo Check-in</button>
    </div>
  );
};

export default CheckinListPage;
