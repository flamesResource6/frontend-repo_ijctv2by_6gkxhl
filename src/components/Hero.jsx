export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(59,130,246,0.35),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white">
              A place to learn, grow, and lead
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Springfield School is a vibrant community where curiosity is celebrated and every student is supported to achieve their best.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#admissions" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                Start Admissions
              </a>
              <a href="#programs" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
                Explore Programs
              </a>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1374&auto=format&fit=crop" alt="Students learning" className="rounded-xl object-cover w-full h-[340px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
