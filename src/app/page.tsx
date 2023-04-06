import Nav from "@/components/nav/Nav";
import About from "@/components/about/About";
import Writing from "@/components/writing/Writing";
import Apps from "@/components/apps/Apps";
import Designs from "@/components/designs/Designs";

export default function Home() {
  return (
    <div className="font-main bg-[#222438] min-h-screen h-auto">
      <div className="sticky top-0">
        <Nav />
      </div>
      <div className="">
        <section id="about">
          <About />
        </section>
        <section id="writing">
          <Writing />
        </section>
        <section id="apps">
          <Apps />
        </section>
        <section id="designs">
          <Designs />
        </section>
      </div>
    </div>
  );
}
