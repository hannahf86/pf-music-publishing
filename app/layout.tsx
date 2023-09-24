import './globals.css'
import Nav from './Components/Nav'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: 'PF Music Publishing',
  description: 'e-Commerce site for local composers',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // FETCH THE USER
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en">
      <body >
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}</body>
    </html>
  )
}
