/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useAppContext } from "@/context/setOrder";
import { useState } from "react";
type Props = {
    label: string;
    placeholder: string;
    typeInput : string;
    name : string;
}
const textBox = ({label, placeholder, typeInput, name} : Props) => {
    const context = useAppContext();
    const [valueId, setValueId] = useState("")
    const elementAccountRef = context?.elementAccountRef;

    return (
        <div ref={elementAccountRef} className="scrollInToAccount">
            <label className="block text-sm text-white mb-2">{label}</label>
            <input type={typeInput} name={name} placeholder={placeholder} value={valueId} onChange={(e) => setValueId(e.target.value)} className="w-full placeholder-black bg-[#C2D2FF] border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none" onWheel={(e) => e.currentTarget.blur()} />
        </div>
    );
}

export default textBox;