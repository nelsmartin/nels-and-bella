"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CARD_COUNT = 500
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
    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-blue-200">
            <div className="w-1/2 grid grid-cols-[repeat(auto-fill,minmax(28px,1fr))] place-items-center">
                    {matrix.map((value, index) => (
                      <button
                        key={index}
                        onPointerEnter={() => switchEnter(index)}
                      >
                       <Image
                       src={value ? "/tileRight.svg" : "/tileLeft.svg"}
                       alt=""
                       height={100}
                       width={100}
                       />
                            
                            
                    
                      </button>
                    ))}
                  </div>
        </main>)
}
    
    
