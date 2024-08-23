export interface TicketGateConfigurationProps {
    id: number;
    fk_unit: number,
    direction: string;
    ticket_gate_ip: string;
    ticket_gate_port: number;
    preferenceDirection: string
}

export interface SliceUserInfosProps {
    userName: string;
    loggedInUserToken: string;
    userPhotoURL: string;
    userUID: string;
    internalID: string;
    ticketGateConfiguration: TicketGateConfigurationProps[];
}