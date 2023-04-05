import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/nav/Nav";
//import styles from './page.module.css'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-main bg-[#222438] h-screen">
      <Nav />
    </main>
  );
}
