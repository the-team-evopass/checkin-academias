// Importando funções necessárias do Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckinProps {
  idUser:number
  image:string
  isChecked:boolean 
  name:string
  time:string
}

// Estado inicial da aplicação, uma array de objetos do tipo Languages
const INITIAL_STATE: CheckinProps[] = [];

// Criando um slice do Redux para gerenciar o estado relacionado às linguagens
const sliceCheckin = createSlice({
  name: 'checkin',
  initialState: INITIAL_STATE,
  reducers: {
    
    // Reducer para adicionar uma nova linguagem à lista
    addCheckin(state, { payload }: PayloadAction<CheckinProps>) {

      if (state.some(objeto => objeto.idUser === payload.idUser)) {
        console.log('Id user repetido')
      } else {
        return [...state, payload ];
      }

    }

  },
});

// Exportando o reducer do slice e as actions correspondentes
export default sliceCheckin.reducer;
export const { addCheckin } = sliceCheckin.actions;

// Hook personalizado para acessar o estado relacionado
// Adicionando um tipo explícito para o parâmetro 'state'
export const useCheckins = (state: { checkinList: CheckinProps[] }) => {
  return state.checkinList;
};