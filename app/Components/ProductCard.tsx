import Image from 'next/image'
import formatPrice from "@/utility/formatPrice"
import { ProductType } from '@/types/ProductType'
import Link from 'next/link'

export default function ProductCard(
    { id,
        name,
        image,
        unit_amount,
        description,
        metadata }: ProductType) {


    const { features } = metadata
    
    const styles = {
        container: 'mt-20 hover:scale-110',
        title: 'text-center text-slate-700 text-lg font-bold pt-2',
        price: 'text-center text-slate-700 text-md',
    }

    return (
        <>
            <Link href='/product/1'>
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
                            {unit_amount !== null ? formatPrice(unit_amount) : 'Please contact our staff'}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}