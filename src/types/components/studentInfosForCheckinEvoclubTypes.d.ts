// Tipagem para o link de pagamento
export interface StudentInfosForCheckinEvoclubPaymentLink {
    id: string;
    name: string;
    value: number;
    active: boolean;
    chargeType: string;
    url: string;
    billingType: string;
    subscriptionCycle: string | null;
    description: string;
    endDate: string | null;
    deleted: boolean;
    viewCount: number;
    maxInstallmentCount: number;
    dueDateLimitDays: number;
    notificationEnabled: boolean;
    isAddressRequired: boolean;
}

export interface StudentInfosForCheckinEvoclubService {
    id: string;
    status: string;
    name: string;
    value: number;
    paymentLink: StudentInfosForCheckinEvoclubPaymentLink;
}

export interface StudentInfosForCheckinEvoclubSubscriptionData {
    cpf: string;
    subscriptionPlan: string;
    subscriptionValue: number;
    subscriptionId: string;
    services: StudentInfosForCheckinEvoclubService[];
}
