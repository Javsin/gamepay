/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { signIn } from "next-auth/react";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonClose from "./auth/buttonClose";
import Button from "./auth/button";

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
        <div className="relative w-full xl:w-1/2 flex flex-col min-h-screen items-start justify-center px-4 sm:px-32">
            <div className="absolute top-2 left-4 md:top-4 2xl:top-10">
                <ButtonClose />
            </div>
            <form onSubmit={clicked}>
                <p className="text-white font-semibold text-2xl mb-0">Masuk</p>
                <p className="text-sm mb-8 text-white">Masuk dengan akun yang telah Kamu daftarkan.</p>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-2">
                    <div className="w-full px-3 mb-0">
                        <label className="block tracking-wide text-white text-xs font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" id="username" type="text" placeholder="Username" onChange={(e) => user.current = e.target.value} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-xs font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" id="password" type="password" placeholder="Password" onChange={(e) => pass.current = e.target.value} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2 px-3">
                    <Button title="Masuk" color="bg-orange-600" />
                    
                </div>
                <p className="text-white text-sm text-center">Belum memiliki akun?</p>
                <Link href="/sign-up" className="flex flex-wrap -mx-3 mb-2 px-3">
                    <Button title="Daftar" color="bg-[#556EB1]" />
                </Link>
            </form>
        </div> 
    );
}
export default signInPage;