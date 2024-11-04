import { DefaultScreen } from "../class/defaultScreen/classDefaultScreen";
import logo from "../assets/imgs/logo/logo-inteira-nome-branca-laranja.svg";
import { FormResetPassword } from "../components/formResetPassword/formResetPassword";

export function RecuperarSenha() {
  return (
    <DefaultScreen classScopeName="cadastro" logoPath={logo}>
      <>
        <FormResetPassword />
      </>
    </DefaultScreen>
  );
}
