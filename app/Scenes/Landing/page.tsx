import React from 'react'
import Image from 'next/image'

// COMPONENTS
import Products from '@/app/Scenes/Products/page'


// IMAGES
import pattern from '@/assets/background.png'

const Landing: React.FC = () => {

  const styles = {
    heroBackground: 'bg-[#607A96] m-8 rounded-lg p-8 grid grid-col-3 ',
    heroWelcome: 'text-4xl ml-28 mb-8 text-[#081B30]',
    heroText: 'text-7xl ml-16 text-[#081B30] ',
  }

  return (
    <div>
      {/* DESKTOP */}
      <div className={styles.heroBackground}>
        <div className='col-start-1 col-span-2 self-center'>
          <h2 className={styles.heroWelcome}>Welcome to</h2>
          <h1 className={styles.heroText}>PF Music Publishing</h1>
        </div>

        <div className='col-start-3 row-start-1 justify-self-center'>
          <Image src={pattern} width={400} alt='product' />
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className='mt-20'>
        <Products />
      </div>

    </div>

  )
}

export default Landing
