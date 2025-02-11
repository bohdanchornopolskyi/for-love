'use client';


import { useRouter } from "next/navigation";
import Confetti from "~/components/confetti";

function Success() {

  const router = useRouter();

  setTimeout(() => {
    router.push('/poem');
  }, 10000);


  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center min-h-screen w-full">
        <Confetti />
        <h1 className="text-5xl md:text-6xl font-bold">OMG! &#x1F92F;</h1>
        <h2 className="text-5xl md:text-6xl font-bold">You are my Valentine!</h2>
      </div>
  )
}

export default Success