export type formOrderConfig = {
    key : string;
    text: string;
    type: string;
    placeholder: string;
    data: string[];
    type_input : string;
};

export type formOrderData = {
    id: number;
    config: formOrderConfig[];
};