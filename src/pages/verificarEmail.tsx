import { DefaultScreen } from '../class/defaultScreen/classDefaultScreen'
import logo from '../assets/imgs/logo/logo-inteira-nome-branca-laranja.svg'

export function VerificarEmail () {

    return (
        <DefaultScreen classScopeName='cadastro' logoPath={logo}>
            <>
                <div>
                    Meu campo de MFA aqui
                </div>
            </>
        </DefaultScreen>
    )
}