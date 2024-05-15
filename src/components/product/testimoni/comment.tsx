'use client'
import IconStar from "@/components/product/testimoni/iconStar"

type CommentiItem = {
    phoneNumber: string;
    product: string;
    date: string;
    comment: string;
};

type CommentProps = {
    dataComment: CommentiItem[];
};

const comment = ({dataComment} : CommentProps) => {
    return(
        <>        
            {
                dataComment.map((comment, index) => (
                    <div className="px-1 py-3 border-b border-white mb-1" key={index}>
                        <div className="flex justify-between mb-1">
                            <p className="text-xs text-white font-light">{comment.phoneNumber}</p>
                            <div className="text-xs text-white font-light"><IconStar count={5} width={12} color="#ffc107"/></div>
                        </div>
                        <div className="flex justify-between mb-1">
                            <p className="text-xs text-white font-light">{comment.product}</p>
                            <p className="text-xs text-white font-light">{comment.date}</p>
                        </div>
                        <div className="flex justify-between mb-1">
                            <p className="text-xs text-white font-light">&quot;{comment.comment}&quot;</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default comment