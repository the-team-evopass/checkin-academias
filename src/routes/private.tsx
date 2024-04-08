import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../utils/timer/timer';

// import { IsLogged } from '../services/authentication/TokenAutentication';

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {

    const navigate = useNavigate();

    async function privateRouter() {

        await Timer(50)

        // const userLogged = await IsLogged()
        const userLogged: number = 200

        if (userLogged != 200) {
            navigate('/login')
        }
    }

    
    useEffect( () => {
        privateRouter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <>{children}</>;
}