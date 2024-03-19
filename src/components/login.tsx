/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { signIn } from "next-auth/react";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const signInPage = () => {
    const router = useRouter();
    const user = useRef('');
    const pass = useRef('');
    const clicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            username: user.current,
            password: pass.current,
            redirect: false,
        });
        if (res?.ok) {
            router.push('/');
        }
    }
    return (
        <div className="rounded-xl bg-white shadow mx-3 md:mx-0 p-5 xl:w-[384px] 2xl:w-1/5">
            <form onSubmit={clicked}>
                <p className="text-gray-800 font-semibold text-2xl mb-0">
                    Masuk
                </p>
                <p className="text-sm mb-4 text-gray-800">
                    Masuk dengan akun yang sudah di daftarkan.
                </p>
                <input type="text" onChange={(e) => user.current = e.target.value} name="username" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                <input type="password" autoComplete="on" onChange={(e) => pass.current = e.target.value} name="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                <button type="submit" className="bg-gradient-to-r from-blue-300 to-indigo-500 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-2">Masuk</button>
                <p className="text-sm text-gray-600 text-center">Belum punya akun?</p>       
                <Link href="/sign-up">
                    <button className="bg-gradient-to-r from-green-400 to-emerald-500 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 mb-4">Daftar </button>
                </Link>
            </form>
        </div>
    );
}
export default signInPage;