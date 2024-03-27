'use server'
export default async function getPopularProduct() {
    const res = await fetch(`${process.env.HOST_API}/api/popular`, { 
        next: { 
            revalidate: 0,
        },
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key' : `${process.env.NEXTAUTH_PROVIDER_SECRET}`
        }
    });
    if (!res.ok) {
        console.log(res);
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}