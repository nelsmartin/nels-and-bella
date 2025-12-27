import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <Image
            src="/nelsAndBella.jpeg"
            alt="scroll image"
            width={1088}
            height={1088}
            className="w-70 h-auto"
          />

    </div>
    
  );
}
