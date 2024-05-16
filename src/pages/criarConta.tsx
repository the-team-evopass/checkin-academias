import { DefaultScreen } from '../class/defaultScreen/classDefaultScreen'
import logo from '../assets/imgs/logo/logo-inteira-nome-branca-laranja.svg'

export function CriarConta () {

    return (
        <DefaultScreen classScopeName='cadastro' logoPath={logo}>
            <>
                <div>
                    Meu form de cadastro aqui
                </div>
            </>
        </DefaultScreen>
    )
}