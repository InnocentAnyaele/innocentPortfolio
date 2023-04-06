import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/nav/Nav";
import About from "@/components/about/About";
import Writing from "@/components/writing/Writing";
import Apps from "@/components/apps/Apps";
import Design from "@/components/design/Design";
//import styles from './page.module.css'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-main bg-[#222438] min-h-screen h-auto">
      <Nav />
      <About />
      <Writing />
      <Apps />
      <Design />
    </main>
  );
}
