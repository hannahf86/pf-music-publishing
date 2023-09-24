import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"

export default async function Product({ searchParams }: SearchParamTypes) {

    const styles = {
        container: 'flex justify-between gap-24 p-12',
    }

    return (
        <div className={styles.container}>

            <h1>{searchParams.name}</h1>
            <p>{searchParams.description}</p>
        </div>
    )
}