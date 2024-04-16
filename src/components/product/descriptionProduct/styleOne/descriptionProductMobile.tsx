'use client'
import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import { motion } from "framer-motion";

const descriptionProductMobile = ( {html} : {html: string}) => {
    const [clean, setClean] = useState<string>('');
    useEffect(() => {
        setClean(DOMPurify.sanitize(html));
    }, [html]);
    return (
        <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-dark-blue-2 px-4 py-2 text-left text-sm font-medium text-white hover:bg-dark-blue-2 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Syarat dan Ketentuan</span>
                    <motion.div
                            className={`h-5 w-5 text-white ${open ? 'rotate-180' : ''}`}
                            animate={{ rotate: open ? 0 : -180 }}
                            transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={ChevronUpIcon}
                            alt="chevronup"
                            width={20}
                            height={20}
                        />
                    </motion.div>
                </Disclosure.Button>
                <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-100 ease-out"
                            leaveFrom="transform scale-95 opacity-0"
                            leaveTo="transform scale-100 opacity-100"
                >
                    <Disclosure.Panel className="mt-3 p-4 text-sm rounded-lg bg-dark-blue-2 ">
                        <div dangerouslySetInnerHTML={{__html: clean}} />
                    </Disclosure.Panel>
                </Transition>
                </>
            )}
        </Disclosure>
    )
}

export default descriptionProductMobile