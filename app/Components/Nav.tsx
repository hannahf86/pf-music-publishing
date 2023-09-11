'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

import React from 'react'

export default function Nav({ user }: Session) {

    const styles = {
        nav: 'flex justify-between items-center py-8 px-12',
        button: 'bg-teal-600 text-white py-2 px-4 rounded-lg',
        image: 'rounded-full',
    }



    return (
        <nav className={styles.nav}>
            <h1>I am present</h1>

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
