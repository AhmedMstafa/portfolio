'use client';
import { useEffect, useState } from 'react';
import styels from './page.module.css';
import { redirect } from 'next/navigation';

export default function Loading() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 100) {
      return redirect('/home');
    }

    const interval = setInterval(() => {
      setCounter((pre) => pre + 1);
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div
      className={`${styels.loading} bg-inherit vw-100 vh-100 top-0 left-0 d-flex align-items-center justify-content-center flex-column`}
    >
      <p className={`${styels['loading-title']} text-light mb-3`}>{counter}%</p>
      <div className={`${styels['loading-progress']} text-light`}>
        <span
          style={{ width: `${counter}%` }}
          className="bg-light d-block"
        ></span>
      </div>
    </div>
  );
}
