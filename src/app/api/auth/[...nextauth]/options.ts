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
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req): Promise<User | null> {
            const users: User = { id: "1", name: "Smith", email: "ax@gmail.com" };
            if (credentials?.username === users.name && credentials?.password === "password") {
                return users;
            }
            return null;
        }
    })],
    pages: {
        signIn: '/sign-in',
    },
}