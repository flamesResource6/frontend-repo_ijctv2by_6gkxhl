export default function Programs() {
  const items = [
    {
      title: "Early Years",
      desc: "Play-based learning that builds strong foundations in literacy, numeracy, and social-emotional skills.",
    },
    {
      title: "Elementary",
      desc: "Inquiry-driven classrooms where students explore, create, and collaborate across subjects.",
    },
    {
      title: "Middle School",
      desc: "A balanced program with academics, arts, and athletics that nurtures independence and leadership.",
    },
    {
      title: "High School",
      desc: "Rigorous college-prep academics with advanced placement options and real-world learning.",
    },
  ];

  return (
    <section id="programs" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">Programs</h2>
        <p className="text-blue-100/80 mt-2 mb-10">A continuum of learning from early years to graduation.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-blue-100/80 mt-2 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
