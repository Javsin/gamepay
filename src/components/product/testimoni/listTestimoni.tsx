'use client'
import IconStar from "@/components/product/testimoni/iconStar"

type TestimoniItem = {
    rating: number;
    count: number;
};

type TestimoniProps = {
    dataTestimoni: TestimoniItem[];
};

const listTestimoni = ({dataTestimoni} : TestimoniProps) => {
    return(
        <>        
            {
                dataTestimoni.map((item: TestimoniItem, index: number) =>  (
                    <div className="my-1 flex items-center" key={index}>
                        <div className="mr-2 text-white text-xs">
                            <div className="flex gap-x-1">
                                <IconStar color="#ffc107" count={1} width={12}/> 
                                {item.rating}
                            </div>
                        </div>
                        <div className="flex-1 mx-1 bg-gray-200 rounded-full">
                            <div className="w-3/4 bg-blue-500 text-xs leading-none py-0.5 text-center text-white rounded-full" style={{ width: `${(item.count / 50) * 100}%` }}></div>
                        </div>
                        <span className="ml-2 text-white text-xs">{item.count}</span>
                    </div>
                ))
            }
        </>
    )
}

export default listTestimoni