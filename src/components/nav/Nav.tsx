"use client";

export default function Nav() {
  function handleClick(event: any) {
    event.preventDefault();
    const target = event.target.hash;
    if (target === "#about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.querySelector(target).offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className="flex flex-row flex-wrap w-screen justify-between items-center px-5 md:px-20 lg:px-20 pt-3 bg-[#222438]">
      <div className="flex flex-row space-x-5 text-white">
        <a href="#about" onClick={handleClick} className="cursor-pointer">
          Home
        </a>
        <a href="#writing" onClick={handleClick} className="cursor-pointer">
          Writing
        </a>
        <a href="#apps" onClick={handleClick} className="cursor-pointer">
          Apps
        </a>
        <a href="#designs" className="cursor-pointer" onClick={handleClick}>
          Designs
        </a>
      </div>
      <div>
        <div className="my-5">
          <a
            href="https://drive.google.com/file/d/10iOOZURELtjoRC39w7yt2-rUgPv7PyeA/view"
            className="bg-white rounded-md h-auto p-2"
          >
            <span className="text-[#222438] text-sm">Download CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
