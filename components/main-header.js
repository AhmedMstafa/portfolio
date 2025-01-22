'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function MainHeader({ title }) {
  useEffect(() => {
    gsap.fromTo(
      '.about-text',
      { x: -100 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 90%',
          end: 'top 0%',
        },
      }
    );
  }, []);

  return (
    <div className="section-header p-0">
      <div className="text fw-semibold d-block mb-3 p-0">
        <span className="about-text fs-3">{title}</span>
      </div>
      <div className="line p-0">
        <span></span>
      </div>
    </div>
  );
}
