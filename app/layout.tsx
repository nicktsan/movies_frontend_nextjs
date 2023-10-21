import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//we want to import SessionProvider as a client component so we can use it as a 
//wrapper around the layout's children components
import SessionProvider from './components/session/SessionProvider'
import { getServerSession } from "next-auth"
import NavMenu from './components/nav/NavMenu'
// import './utils/aws/Amplify';
// import { Authenticator } from '@aws-amplify/ui-react';
//import { SessionProvider } from 'next-auth/react';
//import { Amplify, Hub, Auth } from "aws-amplify"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(
  { children, }: { children: React.ReactNode }
) {
  const session = await getServerSession();
  //SessionProvider is imported from the components folder as a client component to wrap children components
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className='mx-auto max-w-5xl text-2xl flex gap-2'>
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
