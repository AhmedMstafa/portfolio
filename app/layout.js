import { Inter } from 'next/font/google';
import './globals.css';

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
    url: 'https://portfolio-one-blue-11.vercel.app/',
    image: 'https://portfolio-one-blue-11.vercel.app/img/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
