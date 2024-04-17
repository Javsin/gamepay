import React from "react";
import getfromOrder from "@/actions/transaction/getformOrder";
import { formOrderConfig } from "@/types/formOrderType";
import TextBox from "@/components/form/textBox";
import SelectOption from "@/components/form/selectOption";

export default function Formorder({params} : {params: {productId: string}}) {
    const formData = React.use(getfromOrder({id: params.productId}));
    return (
        <div className="bg bg-dark-blue-2 rounded-xl my-7 md:my-0">
            <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                    1
                </div>
                <div>
                    Masukan data akun kamu
                </div>
            </div>
            <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    formData?.data.config.map((item : formOrderConfig, index : number) => {
                        return (
                            <div key={index} className="mb-3">
                                {
                                    item.type === 'textbox' && ( <TextBox label={item.text} placeholder={item.placeholder} typeInput={item.type_input} name={item.key}  /> )
                                }   
                                {
                                    item.type === 'selectbox' && ( <SelectOption label={item.text} option={item.data} placeholder={item.placeholder} name={item.key} /> )
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}