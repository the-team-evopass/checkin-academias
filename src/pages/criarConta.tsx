import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { DefaultScreen } from '../class/defaultScreen/classDefaultScreen'
import { LoadinScreen } from '../components/loadingScreen/loadingScreen';
import logo from '../assets/imgs/logo/logo-inteira-nome-branca-laranja.svg'

export function CriarConta () {

    const isLoading = useSelector((state: RootState) => state.stateIsLoading.isLoading);

    return (
        <DefaultScreen classScopeName='cadastro' logoPath={logo}>
            <>
                <div>
                    Meu form de cadastro aqui
                </div>
                { isLoading && (<LoadinScreen/>) }
            </>
        </DefaultScreen>
    )
}