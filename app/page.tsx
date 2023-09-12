
import Stripe from "stripe"
import ProductCard from "./Components/ProductCard"

// GET PRODUCT LIST
const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-08-16',
  })

  const products = await stripe.products.list()
  //console.log(products)

  // GET THE PRICES OF THE PRODUCTS
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      return {
        id: product,
        name: product.name,
        price: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
      }
    })
  )
  return productWithPrices;
}

export default async function Home() {

  const products = await getProducts();
  //console.log(products)

  const styles = {
    container: 'grid grid-cols-fluid gap-16 mx-12 justify-center',
  }

  return (
    <main >
      <div className={styles.container}>
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </main>
  )
}
