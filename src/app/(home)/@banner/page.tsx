import Carousel from '@/components/carousel';
import Image from 'next/image'
import getSlider from '@/action/getSlider';
import React from 'react';
import { DataBanner } from '@/types/bannerType';
import ImageHeader from '@/public/assets/background_header_rev.png';

export default function BannerPage() {
    const slider = React.use(getSlider());
    const settings = {
        dots: false,
        infinite: slider.data?.length > 1 ? true : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows : false
                }
            }
        ]
    };
    return (
        <div className='relative w-full mt-14 xl:mt-0'>
            <Image src={ImageHeader} alt='header' sizes="100vw" quality={80} fill className='object-cover' priority />
            <div className={`2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem] s`}>
                <Carousel setting={settings}>
                    {
                        slider.data?.map((item : DataBanner, index: number) => {
                            return (
                                <div key={index} className='px-1'>
                                    <Image src={item.image} alt={item.title} width="0" height="0" sizes="100vw" className="w-full xl:h-[30rem] h-32 rounded-lg xl:rounded-xl"/>
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
}