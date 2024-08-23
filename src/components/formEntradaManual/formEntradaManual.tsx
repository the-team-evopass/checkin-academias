import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomInput } from '../../class/input/classInput';
import { CardStudentInformation } from '../cardStudentInformation/cardStudentInformation';
import { ApplicationAlert } from '../alerts/applicationAlert/alert';
import { LoadinScreen } from '../loadingScreen/loadingScreen';
import validateCPF from '../../utils/validators/cpfValidator';
import formatSTRToCPF from '../../utils/formats/formatSTRToCPF';
import formatCPFToSTR from '../../utils/formats/formatCPFToSTR';
import formatDate from '../../utils/formats/fomatDate';
import GetStudentByCPF from '../../services/api/evopass/GET/getStudentByCPF';
import GetCompanyByID from '../../services/api/evopass/GET/getCompanyByID';
import arrowIcon from '../../assets/imgs/svgs/arrow-right.svg';
import '../../assets/styles/components/formEntradaManual/styleFormEntradaManual.css';
import postCreateCheckinRedundant from '../../services/api/evopass/POST/poscreateCheckinRedundant';

interface StudentInfosForCheckinProps {
    firstName: string;
    lastName: string;
    CPF: string;
    dataNascimento: string;
    empresa: string;
    endereço: string
}

interface UserInfosProps {
    loggedInUserToken: string;
}

interface RootState {
    userInfos: UserInfosProps
}

export function FormEntradaManual() {

    const userInfos = useSelector((state: RootState) => state.userInfos);


    // TODO - Colocar gerenciamento de estado global para a minha aplicação, modificar o isLoading
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cpf, setCPF] = useState<string>();
    const [showCarUserInfos, setShowCardInfos] = useState<boolean>(false)
    const [studentInfosForCheckin, setStudentInfosForCheckin] = useState<StudentInfosForCheckinProps>({
        firstName: 'John',
        lastName: 'Doe',
        CPF: '000.000.000-00',
        dataNascimento: 'DD/MM/AAAA',
        empresa: 'Empresa',
        endereço: 'Endereço'
    })

    async function handleSearchStudentsInfos () {

        setIsLoading(true)

        console.log('Procurando informações do aluno')

        if (validateCPF(cpf ? cpf : '') === true) {
        
            try {
                const studentResponse = await GetStudentByCPF(formatCPFToSTR(cpf ? cpf : ''));
                const studentData = studentResponse.data[0];
                const companyID = studentData.fkCompany;
                
                setStudentInfosForCheckin({
                    firstName: studentData.firstName,
                    lastName: studentData.lastName,
                    CPF: formatSTRToCPF(studentData.cpf),
                    dataNascimento: formatDate(studentData.dateOfBirth),
                    empresa: 'Empresa',
                    endereço: 'Retornar',
                    // endereço: studentData.addresses[0].street
                });
    
                const companyResponse = await GetCompanyByID(companyID);
                setStudentInfosForCheckin(prevState => ({ ...prevState, empresa: companyResponse.name}));
    
                setShowCardInfos(true)
                setIsLoading(false)
    
            } catch (error) {
                ApplicationAlert('error', 'Ocorreu um erro ao realizar o Check-in. Tente novamente.');
                console.error('Erro ao buscar dados do estudante ou da empresa:', error);
                setIsLoading(false)
            }

        } else {
            ApplicationAlert('error', 'Digite um CPF válido para realizar o Check-in');
            setIsLoading(false)
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }
    
    async function handleCheckin () {
        console.log('Realizando Check-in')
        await postCreateCheckinRedundant(formatCPFToSTR(studentInfosForCheckin.CPF), userInfos.loggedInUserToken).catch((error) => {
            ApplicationAlert('error', error)
        })
    }
    
    return (
        <form className='form-entrada-manual-container' onSubmit={handleSubmit}>
            {
                isLoading && <LoadinScreen/>
            }
            <h1 className='form-entrada-manual-title'>
                Check-in por CPF
            </h1>
            <br />
            <hr className='form-entrada-manual-hr'/>
            <br />
            <div className='form-entrada-manual-input-button-container'>
                <div className='form-entrada-manual-input-container'>

                    {/* TODO - Arrumar estilização do erro abaixo do input, está ocorrendo uma sobreposição */}

                    <CustomInput
                        classScopeName='input-cpf-form-entrada-manual'
                        isLabel={true}
                        label='CPF'
                        type='text'
                        placeholder='000.000.000-00'
                        onChange={(e) => setCPF(formatSTRToCPF(e))}
                        value = {cpf}
                        error={validateCPF(cpf? cpf : '') == false}
                        errorMessage='CPF inválido'
                    />
                    <button className='button-search-infos-student-checkin' onClick={handleSearchStudentsInfos}>
                        <img src={arrowIcon} alt='Seta virada para direita' />
                    </button>
                </div>
                <br />

                {
                    showCarUserInfos && (
                        <CardStudentInformation
                            firstName={studentInfosForCheckin.firstName}
                            lastName={studentInfosForCheckin.lastName}
                            CPF={studentInfosForCheckin.CPF}
                            dataNascimento={studentInfosForCheckin.dataNascimento}
                            empresa={studentInfosForCheckin.empresa}
                            endereço={studentInfosForCheckin.endereço}
                        />
                    )
                }
                
                <br />

                {
                    showCarUserInfos && (
                        <button className='button-submit-form-entrada-manual' onClick={handleCheckin}>
                            Fazer Check-in
                        </button>

                    )
                }
            </div>
        </form>
    );
}