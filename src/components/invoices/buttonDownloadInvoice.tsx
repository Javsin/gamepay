'use client'

import generatePDF from '@/components/invoices/invoicePDF';
import { InvoiceData } from '@/types/invoiceType';

interface downloadInvoiceProp {
    data: InvoiceData;
}

const buttonDownloadInvoice = ({data} : downloadInvoiceProp) => {
    const handleDownloadInvoice = () => {
        generatePDF(data);
    };
    return(
        <button className="py-1 px-5 w-full bg-orange-500 rounded-xl text-center text-white" onClick={handleDownloadInvoice}>Download Invoice</button>
    )
}

export default buttonDownloadInvoice;