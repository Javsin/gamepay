'use server'
export default async function getProduct<T> ({ id, page }: { id : T , page : T }) {
    const res = await fetch(`${process.env.HOST_API}/api/menu?id_category=${id}&page=${page}`, { 
        next: { 
            revalidate: 600,
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