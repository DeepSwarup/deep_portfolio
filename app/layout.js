// app/layout.jsx
import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Portfolio',
  description: 'Web developer and machine learning engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  )
}
