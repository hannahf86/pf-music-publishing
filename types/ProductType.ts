// STRIPE CAN ERROR ON PRICE, HENCE NULL

export type ProductType = {
    id: string,
    name: string,
    unit_amount: number | null,
    quantity?: number | 1,
    image: string,
    description: string | null,
    metadata: MetadataType,
}

type MetadataType = {
    features: string,
}