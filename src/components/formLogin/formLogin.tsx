import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeStateIsloading } from '../../redux/slices/sliceAPP'
import { addUserInfos, setTicketGateConfiguration } from '../../redux/slices/sliceUserInfos'
import { ToastContainer } from 'react-toastify'
import { ApplicationAlert } from '../alerts/applicationAlert/alert'
import { CustomInput } from '../../class/input/classInput'
import GetloginManagementWeb from '../../services/api/authentication/loginManagementWeb'
import defaultUserPhoto from '../../assets/imgs/userPhoto/defaultUserPhoto.png'
import GetTicketGateConfiguration from '../../services/api/evopass/GET/getTicketGateConfiguration'
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

        dispatch(changeStateIsloading(true));

        await GetloginManagementWeb({
            email: user.userEmail,
            password: user.userPassword,
            role: 'unit'
        }).then( (response) => {

            if (response.statusCode == true) {

                console.log(response, 'resposta da req de login')

                if (response.user) {

                    document.title = `Checkin - ${response.user.displayName}`
                    
                    dispatch(addUserInfos({
                        userName: response.user.displayName || '',
                        loggedInUserToken: response.accessToken || '',
                        userPhotoURL: response.user.photoURL || defaultUserPhoto,
                        userUID: response.user.uid || '',
                        internalID: response.internalID?.toString() || '',
                        ticketGateConfiguration: []
                    }))

                    GetTicketGateConfiguration(response.internalID ? response.internalID.toString() : '').then(response => {
                        console.log('configuração da catraca indo pro dispatch', response)
                        dispatch(setTicketGateConfiguration(response))
                    })
                }
                dispatch(changeStateIsloading(false))
                navigate('/checkin-evoclub')
            } else {
                dispatch(changeStateIsloading(false))
                ApplicationAlert('error', 'E-Mail ou senha inválidos')
            }
            
        }).catch( (e) => {
            console.log(e) 
            dispatch(changeStateIsloading(false))
            ApplicationAlert('error', 'Erro interno')
        })
    }

    return (
    
        <>  
            <ToastContainer/>
            <form action='' className='login-form' onSubmit={handleSubmit}>

                <h1 className='login-form-title'>Login</h1>

                <br />

                <CustomInput
                    classScopeName='login'
                    label='User ID'
                    isLabel={false}
                    type='text'
                    placeholder='E-Mail'
                    onChange={(e)=> setUser({...user,userEmail : e})} 
                    error={true}
                    errorMessage=''
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

                {/* <h3 className='login-form-dont-have-account'>
                    Ainda não tem uma conta? <a href='/criarconta' className='login-form-dont-have-account-link'>Cadastre-se</a>
                </h3> */}
            </form>
        </>
        
    )
}