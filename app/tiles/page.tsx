"use client";
// Idea: Start with stripes (continuous blocks), swap = invert as well
import { useState, useEffect } from "react";
import Image from "next/image";

const CARD_COUNT = 208
export default function Page() {
    
    const [matrix, setMatrix] = useState<boolean[]>(
                () => Array(CARD_COUNT).fill(false));

    const switchEnter = (index : number) => {
        setMatrix(prev => {

            const next = [...prev];
            next[index] = !prev[index];
            return next;
    });
    }
    const imageInit = (index : number, value: boolean) => {
      if (index % 2 == 0) {
        if (value) return "/tileLeftNormal.svg"
        return "/tileRightInverted.svg"
      }
      if (value) return "/tileLeftInverted.svg"
      return "/tileRightNormal.svg"
    } 
    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-blue-200">
            <div className="w-1/2 grid grid-cols-[repeat(auto-fill,minmax(55px,1fr))] place-items-center">
                    {matrix.map((value, index) => (
                      <button
                        key={index}
                        onPointerEnter={() => switchEnter(index)}
                      >
                       <Image
                       src={imageInit(index, value)}
                       alt=""
                       height={100}
                       width={100}
                       />
                            
                            
                    
                      </button>
                    ))}
                  </div>
        </main>)
}
    
    
