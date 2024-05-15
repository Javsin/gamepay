'use server'
import { Pembelian } from "@/types/buyProduct";
export default async function orderProduct (item: Pembelian) {
    const res = await fetch(`${process.env.HOST_API}/api/transaction`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key' : `${process.env.NEXTAUTH_PROVIDER_SECRET}`
        },
        body: JSON.stringify(item)
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}