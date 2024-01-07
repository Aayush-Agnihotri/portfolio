import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1 className='text-red-500'>Next.js</h1>
      <Image
        src="/images/headshot.jpeg"
        alt="Picture of Aayush Agnihotri"
        width={200}
        height={160}
      />
    </div>
  )
}
