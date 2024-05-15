export type PaymentData = {
    [key: string]: Payment[];
};

export type Payment = {
    method_name: string;
    merchant_name: string;
    merchant_logo: string;
    admin_fee: number;
    pivot: {
        id_menu: number;
        id_payment: number;
    }
}