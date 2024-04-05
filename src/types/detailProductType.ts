export type DetailProduct = {
    id: number;
    code_product: string;
    product_name: string;
    price: number;
    kategori: string;
    icon_product: string;
};

export type DataCategory<T> = {
    kategori: string;
    icon_kategori: string;
    data: T[];
};

export type Data = {
    [key: string]: DataCategory<DetailProduct>;
};