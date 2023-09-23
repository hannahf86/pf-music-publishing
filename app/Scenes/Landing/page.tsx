import React from 'react'
import Image from 'next/image'

// IMAGES
import product from '@/assets/ProductCover.png'

const Landing: React.FC = () => {

  const styles = {
    heroBackground: 'bg-[#607A96] m-8 rounded-lg p-8 grid grid-col-3 gap-8',
    heroWelcome: 'text-4xl ml-60 mb-8 mt-4 text-[#081B30]',
    heroText: 'text-7xl ml-40 text-[#081B30] mb-8',
  }


  return (
    <div>
      <div className={styles.heroBackground}>
        <div className='col-start-1 col-span-2 self-center'>
          <h2 className={styles.heroWelcome}>Welcome to</h2>
          <h1 className={styles.heroText}>PF Music Publishing</h1>
        </div>

        <div className='col-start-3 row-start-1 justify-center'>
          <Image src={product} width={300} alt='product' />
        </div>
      </div>
    </div>
  )
}

export default Landing
