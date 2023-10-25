export interface MovieRecord {
    // year: number;
    // title: string;
    id: string;
    name: string;
    images: string[];
    rentPrice: number;
    buyPrice: number;
    nickname: string;
    [key: string]: any;
}