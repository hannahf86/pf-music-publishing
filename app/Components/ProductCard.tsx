import Image from 'next/image'
import formatPrice from "@/utility/formatPrice"
import { ProductType } from '@/types/ProductType'
import Link from 'next/link'

export default function ProductCard({ id, name, image, price }: ProductType) {

    const styles = {
        container: 'mt-20 hover:scale-110',
        title: 'text-center text-slate-700 text-lg font-bold pt-2',
        price: 'text-center text-slate-700 text-md',
    }

    return (
        <>

            <div className={styles.container}>
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                />
                <div>
                    <h1 className={styles.title}>{name}</h1>
                    <h2 className={styles.price}>
                        {price !== null ? formatPrice(price) : 'Please contact our staff'}</h2>
                </div>
            </div>

        </>
    )
}