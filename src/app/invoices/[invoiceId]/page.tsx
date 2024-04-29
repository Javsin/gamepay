'use client'

import DetailTransaction from '@/components/invoices/detailTransaction';
import InfoAccount from '@/components/invoices/infoAccount';
import InfoPayment from '@/components/invoices/infoPayment';
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

const detailInvoice = ({params} : {params: {invoiceId: string}}) => {    
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
        <div className="w-full mt-14 xl:mt-0">
            <div className="2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem]">
                <h1 className="text-4xl text-white font-bold">Terima Kasih!</h1>
                <div className="flex gap-x-2 items-end py-2">
                    <p className="text-white">segera lakukan pembayaran untuk pesanan kamu</p>
                    <div className="bg-yellow-300 py-0.5 px-2 rounded-md text-black font-semibold">{params.invoiceId}</div>
                </div>
                <div className="grid grid-cols-12 gap-3 mt-4">
                    <div className="col-span-12 md:col-span-8">
                        <DetailTransaction />
                        <InfoAccount />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <button className="py-1 px-5 w-full bg-orange-500 rounded-xl text-center text-white" onClick={handleDownloadInvoice}>Download Invoice</button>
                        <InfoPayment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detailInvoice;