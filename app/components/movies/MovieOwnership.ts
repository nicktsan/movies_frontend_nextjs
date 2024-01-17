export interface MovieOwnership {

    customer: string;
    purchaseType: string;
    purchaseDateEpochSeconds: number;
    rentalExpiryDateEpochSeconds: number;
    title: string;
    image: string;

    [key: string]: any;
}