/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { PopularProduct } from "@/types/popularType"
import { motion } from 'framer-motion';
import Image from "next/image";

type Props = {
    item: PopularProduct;
}

const styleOne = ({ item } : Props) => {
    return (
        <div className="drop-shadow-xl">
            <motion.div whileHover={{ scale: 1.02, originX : 0 }} transition={{ type: 'spring', stiffness: 100 }} className='bg-gradient-blue-light px-2 py-3 items-center flex polygon-1 gap-3 cursor-pointer relative'>                                    
                <Image src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl8zZF9pbGx1c3RyYXRpb25fb2ZfYV9kaW1seV9saXRfZ2FtZV9yb29tX25lb25fd19kZDliOGJjOS1lZjU5LTRhYTktYmNhMi1iOWUyNDkyZmI0YzRfMS5qcGc.jpg' alt={item.menu_name} width="0" height="0" sizes="100vw" className="w-20 h-20 rounded-tl-xl rounded-br-2xl object-cover "/>
                <p className='text-white font-semibold' >
                    {item.menu_name}
                </p>
                <div className="selected-item absolute inset-0 overflow-hidden"></div>
            </motion.div> 
        </div>
    )
}

export default styleOne