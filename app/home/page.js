import Hero from '@/components/hero';
import Navbar from '@/components/navbar';

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
