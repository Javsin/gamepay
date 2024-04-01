export type formOrderConfig = {
    text: string;
    type: string;
    data: string[];
};

export type formOrderData = {
    id: number;
    config: formOrderConfig[];
};