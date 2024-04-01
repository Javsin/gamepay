/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useAppContext } from "@/context/setOrder";
type Props = {
    label: string;
    placeholder?: string;
}
const textBox = ({label, placeholder} : Props) => {
    const context = useAppContext();
    const value = context?.id
    const setValue = context?.setID ?? (() => {});
    return (
        <>
            <label className="block text-sm text-white mb-2">{label}</label>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full bg-white border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none"/>
        </>
    );
}

export default textBox;