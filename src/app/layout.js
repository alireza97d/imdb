import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {/*Navbar*/}
        {/*SearchBox*/}
        {children}
        {/*footer*/}
      </body>
    </html>
  )
}
