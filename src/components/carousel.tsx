'use client';
import Slider from 'react-slick';
type Props = {
    setting: object;
    children: React.ReactNode;
};
const Carousel = ( {setting, children} : Props ) => {
    return (
        <div className='slider-container rounded-lg'>
            <Slider {...setting}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;