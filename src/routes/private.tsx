import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Timer from '../utils/timer/timer';
import { IsLogged } from '../services/api/authentication/isLogged';

interface PrivateRouteProps {
    children: ReactNode;
}

// Defina o tipo RootState aqui
interface RootState {
    userInfos: {
        loggedInUserToken: string; // Supondo que loggedInUserToken é do tipo string
        // Outros campos do estado, se houver
    };
    // Outros reducers e seus estados, se houver
}
  
export function PrivateRoute({ children }: PrivateRouteProps) {

    const userAccessToken = useSelector((state: RootState) => state.userInfos.loggedInUserToken);

    const navigate = useNavigate();
    
    useEffect(() => {
        privateRouter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    async function privateRouter() {
        if (userAccessToken !== '') {
            await IsLogged(userAccessToken).then(response => {
                console.log(userAccessToken)
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
