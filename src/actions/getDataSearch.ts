'use server'
export default async function getDataSearch<T> ({ key }: { key : T }) {
    let url = `${process.env.HOST_API}/api/search?menu_name=${key}`;
    if (key ==='') {
        url = `${process.env.HOST_API}/api/search`;
    }
    const res = await fetch(url, {
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