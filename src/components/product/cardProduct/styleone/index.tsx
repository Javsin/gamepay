/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Menu } from "@/types/productType"
import { motion } from 'framer-motion';
import { useAppContext } from "@/context/productLayout";
import Image from "next/image";
import styles from './styleone.module.css';
type Props = {
    item: Menu;
    index: number;
}
const styleOne = ({ item, index } : Props) => {
    const context = useAppContext();
    const varians = {
        hidden : { opacity : 0 },
        visible : { opacity : 1 }
    }
    const count = context?.count;
    const delayAnimated = (index : number) => {
        const plusindex = index + 1;
        if (count) {        
            if(plusindex > (3 * count)){
                const newindex = plusindex - (3 * count) ;
                return newindex * 0.25;
            }
        }
        return index * 0.25;
    }
    return (
        <div className="drop-shadow-xl">
            <motion.div key={index} initial="hidden" animate="visible" variants={varians} viewport={{amount:0}} transition={
                {
                    delay : delayAnimated(index),
                    ease : "easeInOut",
                    duration : 0.5
                }
            } className={`w-full xl:h-64 h-40 bg-gradient-blue-menu polygon-1 cursor-pointer group relative shadow-lg ${styles.polygon}`}>
                <Image src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl8zZF9pbGx1c3RyYXRpb25fb2ZfYV9kaW1seV9saXRfZ2FtZV9yb29tX25lb25fd19kZDliOGJjOS1lZjU5LTRhYTktYmNhMi1iOWUyNDkyZmI0YzRfMS5qcGc.jpg" alt="" width="0" height="0" sizes="100vw" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"/>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-blue-menu">
                    <p>{item.menu_name}</p>
                </div>
                <div className="absolute h-full w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white">
                        {item.menu_name}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default styleOne