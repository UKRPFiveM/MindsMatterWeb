import { Inter } from 'next/font/google'
import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minds Matter UK',
  description: 'Minds Matter, a mental health support bot for your discord server.',
  openGraph: {
    images: ['/logo.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}