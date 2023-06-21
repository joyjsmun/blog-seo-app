import Image from "next/image";
import HeroImage from '../public/hero-bg.jpeg'
import { Logo } from "../components/Logo";
import Link from "next/link";

export default function Home() {

  return( 
  <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative ">
    <Image src={HeroImage} alt="Hero" fill className="absolute" />
    <div className="relative z-10  px-8 py-7 text-center max-w-screen-sm bg-blue-800/90 rounded-md backdrop-blur-sm">
      <Logo />
      <p className="text-white">The AI-powered SAAS solution to generate SEO-optimized blog posts in minutes. 
      Get high-quality content, without sacrificing your time.</p>
                    <Link href="/post/new" className="btn ">Begin</Link>
    </div>
  </div>)
}
