/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useAppContext } from "@/context/setOrder";
type Props = {
    label: string;
    placeholder: string;
    typeInput : string;
}
const textBox = ({label, placeholder, typeInput} : Props) => {
    const context = useAppContext();
    const value = context?.id
    const setValue = context?.setID ?? (() => {});
    return (
        <>
            <label className="block text-sm text-white mb-2">{label}</label>
            <input type={typeInput} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className="w-full placeholder-black bg-[#C2D2FF] border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none"/>
        </>
    );
}

export default textBox;