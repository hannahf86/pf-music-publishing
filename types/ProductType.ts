// STRIPE CAN ERROR ON PRICE, HENCE NULL

export type ProductType = {
    name: string,
    price: number | null,
    image: string,
}