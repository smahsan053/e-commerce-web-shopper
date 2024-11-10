
import { Inter } from 'next/font/google'
import {ShopContextProvider} from './component/Context/ShopContext'
import NavBar from './component/navBar/navbar'
import './globals.css'
import './normalize.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-COM',
  description: 'Generated by create next app',
}

export default function RootLayout({ children}) {

  
    
 
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopContextProvider>
          <NavBar/>
          {children}
          </ShopContextProvider>
        </body>
    </html>
  )
}