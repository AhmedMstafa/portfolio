import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import BootstrapClient from '@/lib/bootstrap-client';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ahmed Mostafa | Front End Developer',
  description:
    'Ahmed Mostafa - Front End Developer skilled in HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, Node.js, Express, and MongoDB',
  author: 'Ahmed Mostafa',
  keywords:
    'HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, Node.js, Express, MongoDB, Front End Development',
  og: {
    title: 'Ahmed Mostafa | Front End Developer',
    description:
      'Ahmed Mostafa - Front End Developer skilled in HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, Node.js, Express, and MongoDB',
    type: 'website',
    url: 'https://github.com/AhmedMstafa',
    image:
      'https://pbs.twimg.com/profile_images/1882558796582551552/MDPI9QDh_400x400.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
