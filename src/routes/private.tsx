import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IsLogged } from '../services/api/authentication/isLogged';
import { RootState } from '../redux/store';
import Timer from '../utils/timer/timer';

interface PrivateRouteProps {
    children: ReactNode;
}
  
export function PrivateRoute({ children }: PrivateRouteProps) {

    const userAccessToken = useSelector((state: RootState) => state.userInfos.loggedInUserToken);

    const navigate = useNavigate();
    
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