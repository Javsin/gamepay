import IconBintang from "@/components/testimoni/iconBintang"

export default function Testimoni() {

    const dataTestimoni = [
        { rating: 5, count: 35},
        { rating: 4, count: 30 },
        { rating: 3, count: 20 },
        { rating: 2, count: 10 },
        { rating: 1, count: 5 },
    ]

    const dataComment = [
        {
            "phoneNumber" : "081*******940",
            "product": "10 (9 + 1) Diamonds",
            "date": "20-04-2022 22:18:42",
            "comment": "Proses cepet banget"
        },
        {
            "phoneNumber" : "081*******940",
            "product": "10 (9 + 1) Diamonds",
            "date": "20-04-2022 22:18:42",
            "comment": "Proses cepet banget"
        },
        {
            "phoneNumber" : "081*******940",
            "product": "10 (9 + 1) Diamonds",
            "date": "21-04-2022 10:30:15",
            "comment": "Layanan bagus, namun perlu peningkatan di sana-sini"
        },
        {
            "phoneNumber" : "081*******940",
            "product": "10 (9 + 1) Diamonds",
            "date": "22-04-2022 14:55:20",
            "comment": "Sangat puas dengan pelayanan, terima kasih!"
        },
    ]


    return (
        <div className="bg-dark-blue-2 rounded-2xl">
            <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                <div className="bg-orange-500 rounded-tl-xl py-2 px-4">
                    <IconBintang color="white" count={1} width={20} />  
                </div>
                <div>
                    Testimoni
                </div>
            </div>
            <div className="px-4 py-5">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex gap-x-2">
                        <IconBintang color="#ffc107" count={1} width={25}/>  
                        <div>
                            <p className="text-4xl text-white font-medium">4.9<span className="text-base"> / 5.0</span>
                            </p>
                        </div>
                    </div>
                    <div className="my-3">
                        <p className="text-xs text-white py-1">98% pembeli merasa puas</p>
                        <p className="text-xs text-white">1031 Ulasan</p>   
                    </div>                    
                </div>
                <div className="my-2">
                    {
                        dataTestimoni.map((item, index) =>  (
                            <div className="my-1 flex items-center" key={index}>
                                <div className="mr-2 text-white text-xs">
                                    <div className="flex gap-x-1">
                                        <IconBintang color="#ffc107" count={1} width={12}/> 
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
                </div>
                <div className="my-4">
                    {
                        dataComment.map((comment, index) => (
                            <div className="px-1 py-3 border-b border-white mb-1" key={index}>
                                <div className="flex justify-between mb-1">
                                    <p className="text-xs text-white font-light">{comment.phoneNumber}</p>
                                    <div className="text-xs text-white font-light"><IconBintang count={5} width={12} color="#ffc107"/></div>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <p className="text-xs text-white font-light">{comment.product}</p>
                                    <p className="text-xs text-white font-light">{comment.date}</p>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <p className="text-xs text-white font-light">"{comment.comment}"</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}