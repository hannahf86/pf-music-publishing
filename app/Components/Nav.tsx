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
        nav: 'flex justify-between items-center py-6 px-32  bg-[#081B30]',
        navItems: 'flex justify-between py-8 px-12 w-7/12 ml-40 text-white tracking-widest',
        button: 'bg-white text-[#081B30] py-2 px-4 rounded-lg',
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
                <Link href='/Scenes/About'><h3>ABOUT</h3></Link>
                <Link href='/Scenes/Services'><h3>SERVICES</h3></Link>
                <Link href='/Scenes/Contact'><h3>CONTACT</h3></Link>
            </div>

            <ul>
                {/* IF THE USER IS NOT SIGNED IN */}
                {!user && (
                    <li>
                        <button
                            className={styles.button}
                            onClick={() => signIn()}>
                            Sign in</button>
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
