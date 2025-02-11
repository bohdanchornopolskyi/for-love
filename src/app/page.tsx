'use client';

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

export default function HomePage() {
  const [noButtonPosition, setNoButtonPosition] = useState<{
    top: number | null;
    left: number | null;
  }>({
    top: null,
    left: null,
  });

  const [hasHovered, setHasHovered] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoHover = () => {
    setHasHovered(true);
    const newTop = Math.max(Math.min(Math.random() * (window.innerHeight - 50), window.innerHeight - 100), 50);
    const newLeft = Math.max(Math.min(Math.random() * (window.innerWidth - 100), window.innerWidth - 150), 50);

    setNoButtonPosition({
      top: newTop,
      left: newLeft,
    });
  };

  useEffect(() => {
    if (noButtonRef.current) {
      setNoButtonPosition({
        top: noButtonRef.current.offsetTop,
        left: noButtonRef.current.offsetLeft,
      });
    }
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-6xl font-bold">Will you be my Valentine?</h1>
        <div className="flex items-center gap-4 justify-center text-3xl">
          <button
            ref={noButtonRef}
            className="px-6 py-2 bg-white rounded-lg transition-all duration-200"
            style={{
              position: hasHovered ? "absolute" : "relative",
              top: hasHovered ? `${noButtonPosition.top}px` : "auto",
              left: hasHovered ? `${noButtonPosition.left}px` : "auto",
            }}
            onMouseOver={handleNoHover}
            onTouchStart={handleNoHover}
          >
            No &#x1F622;
          </button>
          <Link href={'/success'} className="px-6 py-2 bg-white rounded-lg">
            Yes &#x1F600;
          </Link>
        </div>
      </div>
    </main>
  );
}
