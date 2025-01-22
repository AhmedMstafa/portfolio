import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about';
export default async function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
