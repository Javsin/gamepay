export type PaymentData = {
    [key: string]: Payment[];
};

export type Payment = {
    method_name: string;
    merchant_name: string;
    merchant_logo: string;
    admin_fee: string;
    is_prosentase: boolean;
    pivot: {
        id_menu: number;
        id_payment: number;
    }
}