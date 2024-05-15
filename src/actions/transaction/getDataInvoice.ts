'use server'
export default async function getDataInvoice({invoiceId} : {invoiceId: string}) {
    const res = await fetch(`${process.env.HOST_API}/api/transactionDetail?invoice=${invoiceId}`, { 
        next: { 
            revalidate: 0,
        },
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key' : `${process.env.NEXTAUTH_PROVIDER_SECRET}`
        }
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}