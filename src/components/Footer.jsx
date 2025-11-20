export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6 text-blue-100/80">
        <div>
          <h4 className="text-white font-semibold">Springfield School</h4>
          <p className="mt-2 text-sm">123 Learning Lane, Springfield</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="mt-2 text-sm">admissions@springfield.edu</p>
          <p className="text-sm">(555) 123-4567</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm">© {new Date().getFullYear()} Springfield School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
