'use client'

import generatePDF from '@/components/invoices/invoicePDF';

interface InvoiceData {
    orderNumber: string;
    productName: string;
    productQuantity: number;
    productPrice: number;
    totalAmount: number;
    nickname: string;
    userId: string;
    server: string;
    paymentMethod: string;
}

const buttonDownloadInvoice = () => {
    const handleDownloadInvoice = () => {
        const invoiceData: InvoiceData = {
            orderNumber: "TP09090909",
            productName: "Mobile Legends",
            productQuantity: 408,
            productPrice: 367,
            totalAmount: 105701,
            nickname: "sagiri",
            userId: "1212312",
            server: "2233",
            paymentMethod: "Transfer Bank",
        };

        generatePDF(invoiceData);
    };
    return(
        <button className="py-1 px-5 w-full bg-orange-500 rounded-xl text-center text-white" onClick={handleDownloadInvoice}>Download Invoice</button>
    )
}

export default buttonDownloadInvoice;