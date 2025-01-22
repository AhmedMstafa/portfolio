'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { split } from '@/util/split';
import MainHeader from './main-header';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    split('.about p');

    gsap.from('.c', {
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.c',
        scrub: true,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section id="about" className="about pt-5 pb-5">
      <div className="container ps-4 pe-4 text-light">
        <MainHeader title="About" />
        <p className="title w-100 mb-3 mt-3 lh-sm">
          I build and design custom websites that are both playful and efficient
          *◞
        </p>
        <p className="content lh-sm w-lg-75 mb-4">
          Nice to meet you! 🌟 I&apos;m an experienced front-end developer
          passionate about creating high-quality web applications that balance
          functionality and visual appeal. With a global perspective, I&apos;m
          always eager to explore innovative approaches and grow my skills. Feel
          free to reach out—I&apos;m open to new and exciting opportunities!
        </p>
        <p className="content w-lg-75  lh-sm ">
          I build and design custom websites that are both playful and
          efficient. With a background in graphic design, I specialize in
          crafting visually appealing and functional web experiences, with a
          strong focus on user experience and attention to detail. Additionally,
          I&apos;m a curious individual constantly exploring new skills and
          interests. When not coding, you&apos;ll find me at the gym, working
          out and staying fit. 🏋️‍♂️ I love staying active and challenging myself
          physically. I also keep up with the latest industry trends and
          technologies, bringing fresh ideas and efficient solutions to every
          project, always delivering high-quality results.
        </p>
        <p className="content w-lg-75 mt-4">
          Technologies I&apos;m familiar with:
        </p>
      </div>
    </section>
  );
}
