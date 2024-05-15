'use client'

import { Register } from "@/types/registerType";

export default async function registerUser (data: Register) {
    try {
        const res = await fetch(`${process.env.HOST_API}/api/register`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key' : `${process.env.NEXTAUTH_PROVIDER_SECRET}`
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            const errorMessage = await res.text();
            throw new Error(errorMessage || 'Failed to fetch data');
        }
        return res.json();
    } catch (error) {
        if (error instanceof Error) {
            if (error.message) {
                try {
                    const errorMessage = JSON.parse(error.message);
                    if (errorMessage.error) {
                        return { error: errorMessage.error };
                    }
                } catch (parseError) {
                    return { error: 'Failed to parse error message' };
                }
            }
        }
        return { error: 'An unknown error occurred' };
    }
}