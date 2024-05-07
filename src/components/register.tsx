/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonClose from "./auth/buttonClose";
import Button from "./auth/button";
import IconIndonesia from "@/public/assets/icon_indonesia.png"
import Image from "next/image";
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';

const signUpPage = () => {
    const router = useRouter();
    const fullName = useRef('');
    const username = useRef('');
    const email = useRef('');
    const password = useRef('');
    const confirmPassword = useRef('');

    const [captchaValue, setCaptchaValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+62');

    const handleChangeNoHp = (e: any) => {
        const userInput = e.target.value;
        if (userInput.startsWith('+62')) {
            setPhoneNumber(userInput);
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleCaptchaChange = (value: string | null) => {
        value && setCaptchaValue(value);
    };

    const clicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if ( !fullName.current || !username.current || !email.current || !phoneNumber || !password.current || !confirmPassword.current || !isChecked ) {
            toast.error("Silakan isi semua kolom!")
            return;
        }

        if (!isChecked) {
            toast.error("Anda harus menyetujui syarat sebelum mendaftar.")
            return;
        }

        if (password.current !== confirmPassword.current) {
            toast.error("Kata sandi dan konfirmasi kata sandi tidak cocok.")
            return;
        }

        alert("ok");
        // const res = await signIn("credentials", {
        //     fullName: fullName.current,
        //     name: username.current,
        //     email: email.current,
        //     password: password.current,
        //     captcha: captchaValue,
        //     redirect: false,
        // });
        // if (res?.ok) {
        //     router.push('/');
        // }else if (res?.status === 401) {
        //     window.grecaptcha.reset();
        //     alert('Pendaftaran Gagal')
        // }
    }
    return (
        <>
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
                            <div className="relative mb-2">
                                <div className="absolute inset-y-1 start-0 flex justify-center items-center ps-2 pointer-events-none">
                                    <Image src={IconIndonesia} className="w-6" alt="indonesia" />
                                </div>
                                <input type="text" className="border border-gray-300 rounded-md block w-full ps-10 p-2.5 text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" id="noHp"  placeholder="Nomor Whatsapp" value={phoneNumber} onChange={handleChangeNoHp} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-0 md:mb-2">
                        <div className="w-1/2 px-3 md:mb-0">
                            <label htmlFor="password" className="block tracking-wide text-white text-xs font-bold mb-2">Kata Sandi</label>
                            <input id="password" type="password" placeholder="Kata Sandi" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" onChange={(e) => password.current = e.target.value} />
                        </div>
                        <div className="w-1/2 px-3">
                            <label htmlFor="confirmPassword" className="block tracking-wide text-white text-xs font-bold mb-2">Konfirmasi kata sandi</label>
                            <input id="confirmPassword" type="password" placeholder="Konfirmasi kata sandi" className="border border-gray-300 rounded-md px-4 py-2 mb-3 w-full text-sm focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" onChange={(e) => confirmPassword.current = e.target.value} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4 px-3">
                        <label className="w-full flex items-center">
                            <input className="mr-2 leading-tight rounded h-4 w-4 cursor-pointer" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                            <p className="text-xs text-white">
                                Saya setuju dengan <span className="text-sky-300">syarat dan ketentuan</span> dan <span className="text-sky-300">kebijakan pribadi</span>
                            </p>
                        </label>
                    </div>
                    <div className="flex flex-wrap -mx-3 my-2 px-3">
                    <ReCAPTCHA
                            sitekey={`${process.env.NEXT_SITE_KEY}`}
                            onChange={handleCaptchaChange}
                            type="image"
                        />
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
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
export default signUpPage;