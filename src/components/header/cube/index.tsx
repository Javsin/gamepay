import style from './cube.module.css';
const floatingSvg = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={`${style.bg_1} z-0`}>
            <>
                <div className={`${style.context} z-10`}>
                    <div className='container mx-0 xl:mx-auto xl:py-10'>
                        {children}
                    </div>
                </div>
                <ul className={style.circles}>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </>
        </div>
    )
}

export default floatingSvg