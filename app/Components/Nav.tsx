'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

// IMAGES
import logo from '@/assets/favicon.png'

import React from 'react'

export default function Nav({ user }: Session) {

    const styles = {
        nav: 'flex justify-between items-center py-6 px-12 bg-[#081B30]',
        navItems: 'flex justify-center w-4/12 absolute right-60 text-white tracking-widest text-sm',
        button: 'bg-white text-[#081B30] py-2 px-4 rounded-lg text-sm',
        image: 'rounded-full',
    }


    return (
        <nav className={styles.nav}>

            <div >
                <Link href='/'>
                    <Image src={logo} alt='PF Publishing Logo' width={100} />
                </Link>
            </div>

            <div className={styles.navItems}>
                <Link href='/Scenes/Products'><h3 className='px-12'>PRODUCTS</h3></Link>
                <Link href='/Scenes/Contact'><h3 className='px-12'>CONTACT</h3></Link>
            </div>

            <ul>
                {/* IF THE USER IS NOT SIGNED IN */}
                {!user && (
                    <li>
                        <button
                            className={styles.button}
                            onClick={() => signIn()}>
                            <p>Sign in</p></button>
                    </li>

                )}
                {user && (
                    <li>
                        <Image
                            src={user?.image as string}
                            alt={user.name as string}
                            width={48}
                            height={48}
                            className={styles.image} />
                    </li>
                )}
            </ul>
        </nav>
    )
}
