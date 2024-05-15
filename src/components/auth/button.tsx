"use client"

import Link from "next/link";

interface buttonSubmitProps {
    title: string;
    color: string;
}

const buttonSubmit = ({title, color } : buttonSubmitProps) => {
    return(
        <button type="submit" className={`${color} w-full text-white text-sm font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4 mb-2`}>
            {title}
        </button>
    )
}

export default buttonSubmit;