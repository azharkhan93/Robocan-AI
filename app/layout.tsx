import type { Metadata } from 'next'
import './globals.css'
// import './fonts.css'
import Navbar from '../app/Components/Navbar/index'
import Footer from '../app/Components/Footer/index'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <head>
    //   </head>
      // <body >
      <>
        <Navbar />
        {children}
        <Footer />
        </>
      // </body>
    // </html>
  )
}
