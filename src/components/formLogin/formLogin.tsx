import { useDispatch } from 'react-redux';
import { useState, FormEvent } from 'react';
import { changeStateIsloading } from '../../redux/slices/sliceLoadin';
import { CustomInput } from '../../class/input/classInput'
import '../../assets/styles/components/formLogin/styleFormLogin.css'

interface loginUserProps {
    idUser: string;
    userPassword: string
}

export function FormLogin () {

    const dispatch = useDispatch();

    const [user, setUser] = useState<loginUserProps>({
        idUser: '',
        userPassword:''
    })

    function handleSubmit (event: FormEvent) {
        event.preventDefault()
        dispatch(changeStateIsloading({ isLoading: true }));
    }


    return (
        <form action='' className='login-form' onSubmit={handleSubmit}>

            <h1 className='login-form-title'>Login</h1>

            <CustomInput
                classScopeName='login'
                label='User ID'
                isLabel={false}
                type='text'
                placeholder='ID ou E-Mail'
                onChange={(e)=> setUser({...user,idUser : e})} 
                error={true}
                errorMessage='Teste de erro'
            />

            <CustomInput
                classScopeName='login'
                label='User password'
                isLabel={false}
                type='password'
                placeholder='Senha'
                onChange={(e)=> setUser({...user, userPassword: e})}
                error={false}
                errorMessage=''
            />

            <br />

            <button type='submit' className='login-form-submit-button' >Entrar</button>

            <h6 className='login-form-forgot-password'>
                <a href='/recuperarsenha' className='login-form-forgot-password-link'>Esqueceu a sua senha?</a>
            </h6>

            <br />
            <br />

            <h3 className='login-form-dont-have-account'>
                Ainda não tem uma conta? <a href='/criarconta' className='login-form-dont-have-account-link'>Cadastre-se</a>
            </h3>
        </form>
    )
}