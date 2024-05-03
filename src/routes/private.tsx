import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IsLogged } from '../services/api/authentication/isLogged';
import { RootState } from '../redux/store';
import Timer from '../utils/timer/timer';

interface PrivateRouteProps {
    children: ReactNode;
}

// // Defina o tipo RootState aqui
// interface RootState {
//     userInfos: {
//         loggedInUserToken: string; // Supondo que loggedInUserToken é do tipo string
//         // Outros campos do estado, se houver
//     };
//     // Outros reducers e seus estados, se houver
// }
  
export function PrivateRoute({ children }: PrivateRouteProps) {

    const userAccessToken = useSelector((state: RootState) => state.userInfos.loggedInUserToken);

    const navigate = useNavigate();

    // colocar um useState para não deixar o usuário ver uma tela privada.
    // O meu private retorna o children antes de receber o retorno da função privateRouter 
    
    privateRouter();
    
    async function privateRouter() {
        if (userAccessToken !== '') {
            await IsLogged(userAccessToken).then(response => {
                if (response === 500) {
                    navigate('/login');
                }
            });
        } else {
            Timer(50).then(() => {
                navigate('/login');
            });
        }
    }
    
    return <>{children}</>;

}