export default function Nav() {
  return (
    <nav className="flex flex-row w-screen justify-between items-center px-5 pt-3">
      <div className="flex flex-row space-x-5 text-white">
        <span>Home</span>
        <span>Writing</span>
        <span>Apps</span>
        <span>Design</span>
      </div>
      <div>
        <button className="bg-white rounded-md h-auto p-2">
          <span className="text-[#222438] text-sm">Download CV</span>
        </button>
      </div>
    </nav>
  );
}