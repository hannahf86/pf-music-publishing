// STRIPE CAN ERROR ON PRICE, HENCE NULL

export type ProductType = {
    id: string,
    name: string,
    price: number | null,
    image: string,
}