/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonClose from "./auth/buttonClose";
import Button from "./auth/button";
const signUpPage = () => {
    const router = useRouter();
    const fullName = useRef('');
    const username = useRef('');
    const email = useRef('');
    const noHP = useRef('');
    const password = useRef('');
    const confirmPassword = useRef('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const clicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            fullName: fullName.current,
            username: username.current,
            email: email.current,
            noHP: noHP.current,
            password: password.current,
            confirmPassword: confirmPassword.current,
            syarat: isChecked,
        }
        console.log(data);
        // const res = await signIn("credentials", {
        //     username: user.current,
        //     password: pass.current,
        //     redirect: false,
        // });
        // if (res?.ok) {
        //     router.push('/');
        // }
    }
    return (
        <div className="relative w-full xl:w-1/2 flex flex-col min-h-screen items-start justify-center px-4 sm:px-32">
            <div className="absolute top-2 left-4 md:top-4 2xl:top-16 2xl:left-10">
                <ButtonClose />
            </div>
            <form onSubmit={clicked} className="mt-6 md:mt-0">
                <p className="text-white font-semibold text-2xl mb-0">Daftar</p>
                <p className="text-sm mb-8 text-white">Masukkan informasi pendaftaran yang valid.</p>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-2">
                    <div className="w-1/2 px-3 mb-0">
                        <label htmlFor="fullName" className="block tracking-wide text-white text-xs font-bold mb-2">Nama Lengkap</label>
                        <input id="fullName" type="text" placeholder="Nama Lengkap" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" onChange={(e) => fullName.current = e.target.value} />
                    </div>
                    <div className="w-1/2 px-3">
                        <label htmlFor="username" className="block tracking-wide text-white text-xs font-bold mb-2">Username</label>
                        <input id="username" type="text" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" onChange={(e) => username.current = e.target.value} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-2">
                    <div className="w-full px-3">
                    <label className="block tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" id="email" type="email" placeholder="Email" onChange={(e) => email.current = e.target.value} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-2">
                    <div className="w-full px-3">
                    <label className="block tracking-wide text-white text-xs font-bold mb-2" htmlFor="noHp">
                        Nomor Whatsapp
                    </label>
                    <input className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" id="noHp" type="text" placeholder="Nomor Whatsapp" onChange={(e) => noHP.current = e.target.value} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-2">
                    <div className="w-1/2 px-3 md:mb-0">
                        <label htmlFor="password" className="block tracking-wide text-white text-xs font-bold mb-2">Kata Sandi</label>
                        <input id="password" type="text" placeholder="Kata Sandi" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" onChange={(e) => password.current = e.target.value} />
                    </div>
                    <div className="w-1/2 px-3">
                        <label htmlFor="confirmPassword" className="block tracking-wide text-white text-xs font-bold mb-2">Konfirmasi kata sandi</label>
                        <input id="confirmPassword" type="text" placeholder="Konfirmasi kata sandi" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" onChange={(e) => confirmPassword.current = e.target.value} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2 px-3">
                    <label className="w-full flex items-center">
                        <input className="mr-2 leading-tight rounded h-4 w-4 cursor-pointer" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                        <p className="text-xs text-white">
                            Saya setuju dengan <span className="text-sky-300">syarat dan ketentuan</span> dan <span className="text-sky-300">kebijakan pribadi</span>
                        </p>
                    </label>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2 px-3">
                    <Button title="Daftar" color="bg-orange-600" />
                </div>
                <p className="text-white text-sm text-center">Sudah memiliki akun?</p>
                <Link href="/sign-in" className="flex flex-wrap -mx-3 mb-2 px-3">
                    <Button title="Masuk" color="bg-[#556EB1]" />
                </Link>
            </form>
        </div> 
    );
}
export default signUpPage;