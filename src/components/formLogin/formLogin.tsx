import { useDispatch } from 'react-redux';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeStateIsloading } from '../../redux/slices/sliceLoadin';
import { addUserInfos } from '../../redux/slices/sliceUserInfos';
import GetloginManagementWeb from '../../services/api/authentication/loginManagementWeb';
import { CustomInput } from '../../class/input/classInput'
import '../../assets/styles/components/formLogin/styleFormLogin.css'

interface loginUserProps {
    userEmail: string;
    userPassword: string
}

export function FormLogin () {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [user, setUser] = useState<loginUserProps>({
        userEmail: '',
        userPassword:''
    })

    async function handleSubmit (event: FormEvent) {
        event.preventDefault()

        dispatch(changeStateIsloading({ isLoading: true }));

        await GetloginManagementWeb({
            email: user.userEmail,
            password: user.userPassword,
            role: 'management'
        }).then( (response) => {

            if (response.statusCode != false) {

                if (response.user) {
                    dispatch(addUserInfos({
                        loggedInUserToken: response.user.stsTokenManager.accessToken || '',
                        // Essa linha esta testando a subida de uma imagem em um servidor, caso a link da imagem seja vazio, precisarei subir uma imagem default de usuário
                        userPhotoURL: response.user.providerData[0].photoURL || 'https://i.ibb.co/hfqBV4b/foto-de-usu-rio.png',
                        userUID: response.user.uid || ''
                    }));
                }
                navigate('/')
                dispatch(changeStateIsloading({ isLoading: false }));
                
            } else {
                dispatch(changeStateIsloading({ isLoading: false }));
            }

        })
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
                onChange={(e)=> setUser({...user,userEmail : e})} 
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