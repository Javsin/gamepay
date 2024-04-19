"use client"

import Link from "next/link";

const buttonClose = () => {
    return(
        <Link href="/" className="flex justify-center items-center bg-[#556EB1] py-1 px-3 rounded-md text-white">
            X
        </Link>
    )
}

export default buttonClose;