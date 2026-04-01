import { Cinzel, Cormorant_Garamond, Poppins, Space_Grotesk } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '500', '600', '700', '800', '900'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-accent', style: ['normal', 'italic'], weight: ['300', '400', '500', '600', '700'] });
const cormorantBody = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-body', style: ['normal', 'italic'], weight: ['300', '400', '500', '600'] });
const cinzelDisplay = Cinzel({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Shafa | Developer & Explorer',
  description: 'Portfolio of Md. Shafaur Rahman — Flutter Developer, Tech Enthusiast, and Nature Lover.',
  icons: {
    icon: '/assets/logo.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${cormorantBody.variable} ${cinzelDisplay.variable}`} data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
