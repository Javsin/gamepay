'use server'
export default async function getDescription({id} : {id: string}) {
    const res = await fetch(`${process.env.HOST_API}/api/menuConfig?id=${id}`, { 
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