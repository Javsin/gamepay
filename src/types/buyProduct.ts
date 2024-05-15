type TujuanPembelian = {
    key: string;
    value: string;
};

export type Pembelian = {
    tujuan: TujuanPembelian[];
    quantity: number;
    product: string;
    payment: number;
    promo: string;
    contact: string;
};