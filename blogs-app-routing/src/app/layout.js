import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Modern blog with categories and posts'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600" rel="stylesheet" />
      </head>
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/categories" className="nav-link">Categories</Link>
          </nav>
        </header>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}
