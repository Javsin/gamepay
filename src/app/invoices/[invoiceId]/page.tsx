import React from 'react';
import DetailTransaction from '@/components/invoices/detailTransaction';
// import InfoAccount from '@/components/invoices/infoAccount';
import InfoPayment from '@/components/invoices/infoPayment';
import getDataInvoice from '@/actions/transaction/getDataInvoice';
import ButtonDownloadInvoice from '@/components/invoices/buttonDownloadInvoice';
import { InvoiceData } from '@/types/invoiceType';
import ButtonCopy from '@/components/invoices/buttonCopy';

const detailInvoice = ({params} : {params: {invoiceId: string}}) => {   
    const getData = React.use(getDataInvoice({invoiceId: params.invoiceId})); 
    const data = getData.data as InvoiceData;
    const time = new Date().getTime();
    
    return(
        <div className="w-full mt-14 xl:mt-0">
            <div className="2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem]">
                <h1 className="text-xl text-center md:text-start mt-5 md:mt-0 md:text-4xl text-white font-bold">Terima Kasih!</h1>
                <div className="flex flex-col md:flex-row text-sm md:mx-0 gap-x-2 gap-y-2 md:gap-y-0 items-center md:items-end py-2">
                    {
                        data.transaction_status === 'success' ? (
                            <p className="text-white">pesanan telah selesai, kami tunggu pesanan selanjutnya ya </p>
                        ) : (
                            <p className="text-white">segera lakukan pembayaran untuk pesanan kamu</p>
                        )
                    }
                    <ButtonCopy invoiceId={params.invoiceId} />
                </div>
                <div className="grid grid-cols-12 gap-3 mt-4">
                    <div className="col-span-12 md:col-span-8">
                        <DetailTransaction data={data} />
                        {/* <InfoAccount data={data} /> */}
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <ButtonDownloadInvoice data={data} />
                        <InfoPayment data={data} time={time} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detailInvoice;