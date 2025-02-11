'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti() {
  useEffect(() => {
    // eslint-disable-next-line
    confetti({
      particleCount: 100,
      spread: 140,
      origin: { y: 0.5 },
    });
    const interval = setInterval(() => {
      // eslint-disable-next-line
      confetti({
        particleCount: 100,
        spread: 140,
        origin: { y: 0.5 },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <></>;
}
