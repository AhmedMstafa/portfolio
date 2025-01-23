'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function MainHeader({ title }) {
  const container = useRef();
  useGSAP(
    () => {
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
    },
    { scope: container }
  );

  return (
    <div ref={container} className="section-header p-0">
      <div className="text fw-semibold d-block mb-3 p-0">
        <span className="about-text fs-3">{title}</span>
      </div>
      <div className="line p-0">
        <span></span>
      </div>
    </div>
  );
}
