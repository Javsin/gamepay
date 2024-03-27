import DesktopNav from '@/components/navigation/desktop';
import MobileNav from '@/components/navigation/mobile';
import Search from './search';
import { useState } from 'react';
type Props = {
    title: string;
};

const Navigation = ({ title }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <DesktopNav toggle={toggle} />
            <MobileNav toggle={toggle} />
            <Search isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default Navigation;
