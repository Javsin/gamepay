import style from './stars.module.css';
const stars = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={`${style.bg_1} z-0`}>
            <div className="sky">
                <div className='z-10 relative'>
                    <div className='container mx-0 xl:mx-auto pt-3 xl:py-10'>
                        {children}
                    </div>
                </div>
                <div className={style.stars}></div>
                <div className={style.stars2}></div>
                <div className={style.stars3}></div>
                <div className={style.shooting_stars}></div>
            </div>
        </div>
    )
}

export default stars