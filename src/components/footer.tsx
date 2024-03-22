import { DataLayout } from "@/types/infoLayoutType";
import Image from "next/image";
import FooterImage from "@/public/assets/background_footer.png";
const Footer = ({data}: {data: DataLayout}) => {
    const { token } = data;
    return (
        <footer>
            <Image src={FooterImage} alt='footer' sizes="100vw" className='object-cover w-full h-42' priority />
            <p>{token}</p>
        </footer>
    );
}

export default Footer;