'use client'

import generatePDF from '@/components/invoices/invoicePDF';
import { InvoiceData } from '@/types/invoiceType';
import { useEffect } from 'react';

interface downloadInvoiceProp {
    data: InvoiceData;
}

const buttonDownloadInvoice = ({data} : downloadInvoiceProp) => {

    const {payment_methode, product_name} = data;
    const {qris_data, total_tagihan, tagihan, exp, tujuan} = data.payment_detail;

    useEffect(() => {
        try{
            // @ts-ignore
            Android.cetak(JSON.stringify({
                qrcode: qris_data,
                paymentMethod: payment_methode,
                adminQris: total_tagihan - tagihan,
                total_tagihan: total_tagihan,
                harga_produk: tagihan,
                tgl_expired: exp,
                tujuan: tujuan,
                produk: product_name
            }))
        }catch(error){
            console.log(error)
        }
    })

    const handleDownloadInvoice = () => {
        generatePDF(data);
    };
    return(
        <button className="py-1 px-5 w-full bg-orange-500 rounded-xl text-center text-white" onClick={handleDownloadInvoice}>Download Invoice</button>
    )
}

export default buttonDownloadInvoice;