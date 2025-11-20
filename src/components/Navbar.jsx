import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-blue-500/20 border border-blue-400/30 grid place-items-center">
            <span className="text-blue-400 font-black">S</span>
          </div>
          <span className="text-white font-semibold tracking-tight">Springfield School</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="#admissions" className="hover:text-white">Admissions</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden text-white/80 hover:text-white" aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
