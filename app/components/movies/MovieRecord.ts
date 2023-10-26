export interface MovieRecord {
    // year: number;
    // title: string;
    id: string;
    name: string;
    images: string[];
    rentPrice: number;
    rentId: string
    rentCurrency: string
    buyPrice: number;
    buyId: string
    buyCurrency: string
    nickname: string;
    [key: string]: any;
}