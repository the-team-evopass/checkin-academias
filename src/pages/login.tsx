import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { DefaultScreen } from '../class/defaultScreen/classDefaultScreen'
import { LoadinScreen } from '../components/loadingScreen/loadingScreen';
import { FormLogin } from '../components/formLogin/formLogin'
import logo from '../assets/imgs/logo/logo-inteira-nome-branca-laranja.svg'


export function Login () {

    const isLoading = useSelector((state: RootState) => state.app.isLoading)

    return (
        <DefaultScreen classScopeName='login' logoPath={logo}>
            <>
                <FormLogin/>
                { isLoading && (<LoadinScreen/>) }
            </>
        </DefaultScreen>
    )
}