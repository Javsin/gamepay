import  { ProductWrapper } from '@/context/productLayout'
export default function SecondaryLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <>
            <ProductWrapper>
                {children}
            </ProductWrapper>
        </>
    )
}