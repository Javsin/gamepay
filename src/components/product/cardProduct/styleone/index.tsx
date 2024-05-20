/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Menu } from "@/types/productType"
import { motion } from 'framer-motion';
import { useAppContext } from "@/context/productLayout";
import Image from "next/image";
import styles from './styleone.module.css';
import acccentImage from '@/public/assets/image_best_up.png'
import Link from "next/link";
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
        <Link href={`/transaction/${item.id}`} className="drop-shadow-xl">
            <motion.div key={index} initial="hidden" animate="visible" variants={varians} viewport={{amount:0}} transition={
                {
                    delay : delayAnimated(index),
                    ease : "easeInOut",
                    duration : 0.5
                }
            } className={`w-full xl:h-64 sm:h-56 md:h-64 h-40 bg-gradient-blue-menu cursor-pointer group relative shadow-lg ${styles.polygon}`}>
                <div className="">
                    <div className="xl:h-44 sm:h-40 md:h-44 h-24">
                        <Image src={item.thumbnail} alt="" width="0" height="0" sizes="100vw" className="w-full h-full md:group-hover:scale-110 md:transition-all md:duration-300"/>
                    </div>
                    <div className="bg-gradient-blue-menu text-white z-50 h-full"> 
                        <Image src={acccentImage} quality={10} alt="accent" width="0" height="0" sizes="100vw" className="w-full h-full"/>
                        <p className="p-2 text-xs md:text-sm lg:text-base">{item.menu_name}</p>
                    </div>
                </div>
                <div className="absolute h-full w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white">
                        {item.menu_name}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}

export default styleOne