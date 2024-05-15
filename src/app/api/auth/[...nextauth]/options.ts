import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
type User = {
    id: string;
    name: string;
    email: string;
}
export const options: NextAuthOptions = {
    providers  : [
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: "Email", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
            captcha: { label: "Captcha", type: "text" },
        },
        async authorize(credentials, req) : Promise<any | null> {
            const res = await fetch(`${process.env.HOST_API}/api/login`, {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { 
                    "Content-Type": "application/json",
                    "X-Api-Key" : `${process.env.NEXTAUTH_PROVIDER_SECRET}`
                }
            })
            const user = await res.json()
            if (res.ok && user) {
                return user
            }
            // Return null if user data could not be retrieved
            return null
        },
        
    })],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        }
    },
    pages: {
        signIn: '/sign-in',
    },
}