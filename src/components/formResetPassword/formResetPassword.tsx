import { useState, FormEvent } from "react";
import { CustomInput } from "../../class/input/classInput";
import { LoadinScreen } from "../loadingScreen/loadingScreen";
import resetUserPassword from "../../services/api/authentication/resetPassword";
import { ToastContainer } from "react-toastify";
import { ApplicationAlert } from "../alerts/applicationAlert/alert";
import { Link } from "react-router-dom";
import "../../assets/styles/components/formResetPassword/styleFormResetPassword.css";

export function FormResetPassword() {
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function handleResetpassword(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    await resetUserPassword(email).then((response) => {
      console.log(response);
      if (response == 201) {
        setIsLoading(false);
        ApplicationAlert(
          "success",
          "Email para resdefinição de senha enviado!"
        );
      } else {
        ApplicationAlert("error", "O E-Mail informado não possui cadastro!");
        setIsLoading(false);
      }
    });
  }

  return (
    <>
      {isLoading && <LoadinScreen />}

      <ToastContainer />

      <div className="container-form-reset-password">
        <p className="form-reset-password-text-container">
          <h1 className="form-reset-password-title">Esqueceu a senha?</h1>
          <h3 className="form-reset-password-msg">
            Digite o e-mail que você usou para criar sua conta para que possamos
            enviar instruções sobre como redefinir sua senha.
          </h3>
        </p>
        <form action="" onSubmit={handleResetpassword}>
          <CustomInput
            classScopeName="form-reset-password-input-text"
            label="Teste"
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <input className="btn-right-reset-password" type="submit" />
        </form>
        <br />
        <h5 className="form-reset-password-footer-text">
          Retornar para a tela de <Link to="/login">login</Link>
        </h5>
      </div>
    </>
  );
}
