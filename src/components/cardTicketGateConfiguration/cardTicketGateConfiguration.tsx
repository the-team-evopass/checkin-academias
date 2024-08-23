import { useState, FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CustomInput } from '../../class/input/classInput';
import { LoadinScreen } from '../loadingScreen/loadingScreen';
import { ApplicationAlert } from '../alerts/applicationAlert/alert';
import formatSTRToIP from '../../utils/formats/formatSTRToIP';
import formatSTRToPort from '../../utils/formats/formatSTRToPort';
import GetTicketGateConfiguration from '../../services/api/evopass/GET/getTicketGateConfiguration';
import patchTicketGateConfiguration from '../../services/api/evopass/PATCH/patchTicketGateConfiguration';
import '../../assets/styles/components/cardTicketGateConfiguration/styleCardTicketGateConfiguration.css';

interface TicketGateConfigurationProps {
    direction: string;
    ticket_gate_ip: string;
    ticket_gate_port: number;
    preferenceDirection: string;
}

export function CardTicketGateConfiguration() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const userInfos = useSelector((state: RootState) => state.userInfos);
    const ticketGateConfigurationReduxUser = useSelector((state: RootState) => state.userInfos.ticketGateConfiguration);
    const [ticketGateConfiguration, setTicketGateConfiguration] = useState<TicketGateConfigurationProps>({
        direction: '',
        ticket_gate_ip: '',
        ticket_gate_port: 0,
        preferenceDirection: ''
    });

    async function fetchData() {
        setIsLoading(true);
        await GetTicketGateConfiguration(userInfos.internalID.toString()).then((res) => {
            setTicketGateConfiguration(
                {
                    direction: res[0].direction,
                    ticket_gate_ip: res[0].ticket_gate_ip,
                    ticket_gate_port: res[0].ticket_gate_port,
                    preferenceDirection: res[0].preferenceDirection
                }
            );
        })
        setIsLoading(false);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const userConfirmActionPatchTicketGateConfiguration  = window.confirm('Tem certeza que deseja editar as configurações da catraca?')

        if (userConfirmActionPatchTicketGateConfiguration) {
            setIsLoading(true);
            try {
                await patchTicketGateConfiguration(
                    // TODO - Melhorar isso, deixar de uma forma mais clara
                    ticketGateConfigurationReduxUser[0].id.toString(),
                    ticketGateConfiguration.direction,
                    ticketGateConfiguration.ticket_gate_ip,
                    ticketGateConfiguration.ticket_gate_port,
                    ticketGateConfiguration.preferenceDirection
                ).then( () => {
                    setIsLoading(false)
                    ApplicationAlert('success', 'Informações atualizadas!')
                })
            } catch (error) {
                console.log(error)
                setIsLoading(false);
                ApplicationAlert('error', 'Erro ao atualizar informações')
            }
        }


    }

    useEffect( () => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                isLoading && <LoadinScreen />
            }
            <form className='card-ticket-gate-configuration-container' onSubmit={handleSubmit}>
                <header className='card-ticket-gate-configuration-header'>
                    <h1 className='card-ticket-gate-configuration-title'>Configurar catraca</h1>
                    <br />
                    <hr />
                    <br />
                </header>
                <div className='card-ticket-gate-configuration-container-inputs'>
                    <CustomInput
                        classScopeName='ticket-gate-configuration'
                        isLabel={true}
                        label='IP da catraca'
                        type='text'
                        placeholder='000.000.0.0'
                        onChange={(newValue) => setTicketGateConfiguration(prevState => ({
                            ...prevState,
                            ticket_gate_ip: newValue
                        }))}
                        value={formatSTRToIP(ticketGateConfiguration.ticket_gate_ip)}
                    />
                    
                    <CustomInput
                        classScopeName='ticket-gate-configuration'
                        isLabel={true}
                        label='Porta da catraca'
                        type='text'
                        placeholder='8080'
                        onChange={(newValue) => setTicketGateConfiguration(prevState => ({
                            ...prevState,
                            ticket_gate_port: parseInt(newValue)
                        }))}
                        value={formatSTRToPort(ticketGateConfiguration.ticket_gate_port.toString())}
                    />
                    <CustomInput
                        classScopeName="ticket-gate-configuration"
                        isLabel={true}
                        label="Direção da catraca"
                        type="select"
                        value={ticketGateConfiguration.direction}
                        onChange={(newValue) => setTicketGateConfiguration(prevState => ({
                            ...prevState,
                            direction: newValue
                        }))}
                        options={[
                            { value: 'clockwise', label: 'Horário' },
                            { value: 'anticlockwise', label: 'Anti-horário' },
                        ]}
                    />
                    <CustomInput
                        classScopeName="ticket-gate-configuration"
                        isLabel={true}
                        label="Direção preferencial"
                        type="select"
                        value={ticketGateConfiguration.preferenceDirection}
                        onChange={(newValue) => setTicketGateConfiguration(prevState => ({
                            ...prevState,
                            preferenceDirection: newValue
                        }))}
                        options={[
                            { value: 'clockwise', label: 'Horário' },
                            { value: 'anticlockwise', label: 'Anti-horário' },
                        ]}
                    />
                </div>
                <br />
                {/* TODO - Criar intertravamento para impedir multiplas atualizações */}
                <footer className='card-ticket-gate-configuration-footer'>
                    <button className='card-ticket-gate-configuration-footer-button'>
                        Salvar
                    </button>
                </footer>
            </form>
        </>
    );
}
