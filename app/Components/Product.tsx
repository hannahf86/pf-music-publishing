import Image from 'next/image'
import formatPrice from "@/utility/formatPrice"
import { ProductType } from '@/types/ProductType'


export default function Product({
    name,
    image,
    price }: ProductType) {
    return (
        <>
            <h1>{name}</h1>
            <h2>{price !== null ? formatPrice(price) : 'Please contact our staff'}</h2>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200} />
        </>
    )
}