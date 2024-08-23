import { SubLine } from '../subLine/subLine';
import defaultUserIMG from '../../assets/imgs/userPhoto/defaultUserPhoto.png'
import '../../assets/styles/components/cardStudentInformation/styleCardStudentInformation.css'
import { CustomInput } from '../../class/input/classInput';

interface CardStudentInformationProps {
    firstName: string;
    lastName: string;
    CPF: string;
    dataNascimento: string;
    empresa: string;
    endereço: string
}

export function CardStudentInformation ({firstName, lastName, CPF, dataNascimento, empresa, endereço}:CardStudentInformationProps) {
    return (
        <div className='card-student-information-container'>
            <header className='card-student-information-header'>
                <img src={defaultUserIMG} alt="" />
                <SubLine textLine1={`${firstName} ${lastName}`} textLine2='felipemelo.unidade@gmail.com'/>
            </header>
            <hr className='card-student-information-hr' />
            <footer className='card-student-information-footer'>
                <CustomInput classScopeName='student-information' isLabel={true} label='CPF' placeholder={CPF} type='text' onChange={() => {}} disabled/>
                <CustomInput classScopeName='student-information' isLabel={true} label='DATA DE NASCIMENTO' placeholder={dataNascimento} type='text' onChange={() => {}} disabled/>
                <CustomInput classScopeName='student-information' isLabel={true} label='EMPRESA' placeholder={empresa} type='text' onChange={() => {}} disabled/>
                <CustomInput classScopeName='student-information' isLabel={true} label='ENDEREÇO' placeholder={endereço} type='text' onChange={() => {}} disabled/>

            </footer>
        </div>
    )
}