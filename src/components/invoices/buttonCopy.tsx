'use client'
import { ToastContainer, toast } from 'react-toastify';

interface buttonCopyProps {
    invoiceId: string;
}

const buttonCopy = ({invoiceId} : buttonCopyProps) => {

    const handleCopy = (text : string) => {
        navigator.clipboard.writeText(text)
        toast.success("Berhasil disalin")
    }

    return(
        <>
            <button className="bg-yellow-300 py-0.5 px-2 rounded-md text-black font-semibold cursor-pointer" onClick={()=>handleCopy(invoiceId)}>
                {invoiceId}
            </button>

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
    )
}

export default buttonCopy;