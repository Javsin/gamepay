import Carousel from '@/components/carousel';
import Image from 'next/image'
import getSlider from '@/lib/getSlider';
import React from 'react';
export default function BannerPage() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const slider = React.use(getSlider());
    return (
        <div className='pt-16 pt'>
            <Carousel setting={settings}>
                {
                    slider.data?.map((item :any, index: number) => {
                        return (
                            <div key={index} className='px-1'>
                                <Image src={item.image} alt={item.title} width="0" height="0" sizes="100vw" className="w-full xl:h-96 rounded xl:rounded-xl" priority />
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}