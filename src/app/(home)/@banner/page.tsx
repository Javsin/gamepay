import Carousel from '@/components/carousel';
import Image from 'next/image'
import getSlider from '@/action/getSlider';
import React from 'react';
import { DataBanner } from '@/types/bannerType';
import ImageHeader from '@/public/assets/background_header_rev.png';
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
        <div className='relative w-full mt-14'>
            <Image src={ImageHeader} alt='header' sizes="100vw" quality={100} fill className='object-cover' priority />
            <div className='2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 pt-6 pb-12 xl:max-w-[70rem]'>
                <Carousel setting={settings}>
                    {
                        slider.data?.map((item : DataBanner, index: number) => {
                            return (
                                <div key={index} className='px-1'>
                                    <Image src={item.image} alt={item.title} width="0" height="0" sizes="100vw" className="w-full xl:h-[30rem] rounded xl:rounded-xl"/>
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
}