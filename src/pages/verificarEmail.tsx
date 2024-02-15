import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { DefaultScreen } from '../class/defaultScreen/classDefaultScreen'
import { LoadinScreen } from '../components/loadingScreen/loadingScreen';
import logo from '../assets/imgs/logo/logo-inteira-nome-branca-laranja.svg'

export function VerificarEmail () {

    const isLoading = useSelector((state: RootState) => state.stateIsLoading.isLoading);

    return (
        <DefaultScreen classScopeName='cadastro' logoPath={logo}>
            <>
                <div>
                    Meu campo de MFA aqui
                </div>
                { isLoading && (<LoadinScreen/>) }
            </>
        </DefaultScreen>
    )
}