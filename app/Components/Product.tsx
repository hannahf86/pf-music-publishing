import Image from 'next/image'


export default function Product({ name, image, price }) {
    return (
        <>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200} />
        </>
    )
}