export type PaymentDetail = {
    qris: string;
    tagihan: string;
    total_tagihan: string;
    admin_qr: number;
    biaya_layanan: string;
    exp: string;
}

export type InvoiceData = {
    invoice: string;
    transaction_status: string;
    transaction_payment: string;
    message: string;
    payment_detail: PaymentDetail;
}