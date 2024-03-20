'use server'
export default async function getInfo() {
    const res = await fetch(`${process.env.HOST_API}/api/instansi`, { 
        next: { 
            revalidate: 3600,
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