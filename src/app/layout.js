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
        {/* Script to prevent dark mode flash */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedDarkMode = localStorage.getItem('darkMode');
                if (storedDarkMode === 'true') {
                  document.documentElement.classList.add('dark-mode');
                  document.body.classList.add('bg-gray-900');
                  document.body.classList.add('text-white');
                }
              } catch (e) {
                console.error('Error accessing localStorage:', e);
              }
            })();
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}