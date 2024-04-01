/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { PopularProduct } from "@/types/popularType"
import { motion } from 'framer-motion';
import Image from "next/image";
import styles from './styleone.module.css';
import Link from "next/link";
type Props = {
    item: PopularProduct;
}

const styleOne = ({ item } : Props) => {
    return (
        <Link href={`transaction/${item.id}`} className="drop-shadow-xl">
            <motion.div whileHover={{ scale: 1.02, originX : 0 }} transition={{ type: 'spring', stiffness: 100 }} className={`bg-gradient-blue-light px-2 py-2 md:py-3 items-center flex gap-3 cursor-pointer relative ${styles.polygon}`}>                                    
                <Image src={item.thumbnail} alt={item.menu_name} width="0" height="0" sizes="100vw" className="md:w-20 md:h-20 w-14 h-14 rounded-tl-xl rounded-br-2xl object-cover"/>
                <p className='text-white font-semibold text-xs md:text-base' >
                    {item.menu_name}
                </p>
                <div className="selected-item absolute inset-0 overflow-hidden"></div>
            </motion.div> 
        </Link>
    )
}

export default styleOne