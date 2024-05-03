interface PaymentDetail {
    trxid: string;
    ticket_status: string;
    response_code: string;
    response_msg: string;
    tujuan: string;
    sn: string;
    qris_data: string;
    exp: string;
    admin_qr: string;
    admin_mr: string;
    pay_status: string;
    tagihan: number;
    total_tagihan: number;
}

export type InvoiceData = {
    invoice: string;
    qty: number;
    product_name: string;
    payment_methode: string;
    transaction_status: string;
    transaction_payment: string;
    message: string;
    payment_detail: PaymentDetail;
}