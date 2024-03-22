export type Menu = {
    id: number;
    slug: string;
    menu_name: string;
    popular: number;
    config: string;
    image: string;
    thumbnail: string;
    banner_image: string;
    id_instansi: number;
    id_category: number;
    sort: string;
    deleted_at: null | string;
    created_at: string;
    updated_at: string;
    laravel_through_key: number;
}

export type Link = {
    url: null | string;
    label: string;
    active: boolean;
}

export type ResponseData = {
    current_page: number;
    data: Menu[];
    first_page_url: string;
    from: number;
    last_page: number;
    next_page_url: boolean;
    per_page: number;
    prev_page_url: null | string;
    to: number;
    total: number;
}