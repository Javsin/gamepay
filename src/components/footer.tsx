'use client';
import { useAppContext } from "@/context/infoLayout";
const Footer = () => {
    const context = useAppContext();
    const data = context?.state;
    return (
        <footer>
            {data === null && <p>Loading</p>}
            <p>{data?.token}</p>
        </footer>
    );
}

export default Footer;