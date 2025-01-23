import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';
import Footer from '@/components/footer';
export default async function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
