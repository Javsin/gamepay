import React from 'react';
import DetailTransaction from '@/components/invoices/detailTransaction';
import InfoAccount from '@/components/invoices/infoAccount';
import InfoPayment from '@/components/invoices/infoPayment';
import getDataInvoice from '@/actions/transaction/getDataInvoice';
import ButtonDownloadInvoice from '@/components/invoices/buttonDownloadInvoice';
import { InvoiceData } from '@/types/invoiceType';

const detailInvoice = ({params} : {params: {invoiceId: string}}) => {   
    const getData = React.use(getDataInvoice({invoiceId: params.invoiceId})); 
    const data = getData.data as InvoiceData;
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
                        <DetailTransaction data={data} />
                        <InfoAccount data={data} />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <ButtonDownloadInvoice />
                        <InfoPayment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detailInvoice;