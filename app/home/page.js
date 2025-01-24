import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';
import Footer from '@/components/footer';

function consoleMessage() {
  console.log(
    "%cWelcome to the developer's secret lair! 🦸‍♂️\nFeel free to snoop around, but beware of gremlins! 👾\nHappy coding, fearless adventurer! ⚔️",
    'color: orange; font-size: 16px; font-weight: bold;'
  );
}

export default async function HomePage() {
  consoleMessage();
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
