
const detailProduct = ({params} : {params: {productId: string}}) => {
    return (
        <>
            <h1>Product Detail</h1>
            <p>Product ID: {params.productId}</p>
        </>
    )
}

export default detailProduct;