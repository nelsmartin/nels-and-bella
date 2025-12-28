"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const FACE_COUNT = 1479;

export default function Home() {
  const [matrix, setMatrix] = useState<boolean[]>(
    () => Array(FACE_COUNT).fill(false)
  );
  const [shift, setShift] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Shift") setShift(true);
      if (e.key === "Escape") {
        setMatrix(prev => prev.map(() => false));
      }
    };

    const up = (e: KeyboardEvent) => {
      if (e.key === "Shift") setShift(false);
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    if (!shift || hoveredIndex === null) return;

    setMatrix(prev => {
      if (prev[hoveredIndex]) return prev;
      const next = [...prev];
      next[hoveredIndex] = true;
      return next;
    });
  }, [shift, hoveredIndex]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-3xl mt-5">Happy Birthday Amanda!</h1>
      <p>Hold shift to draw</p>
      <p className="mb-5">Esc to erase</p>

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(28px,1fr))] place-items-center">
        {matrix.map((value, index) => (
          <button
            key={index}
            onPointerEnter={() => setHoveredIndex(index)}
            onPointerLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={value ? "/amandaSquare.jpeg" : "/andrewSquare.jpeg"}
              alt=""
              width={1088}
              height={1088}
              className="w-7 h-7"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
