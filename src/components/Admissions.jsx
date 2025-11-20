import { useState } from "react";

export default function Admissions() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending..." });
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again.");
      const data = await res.json();
      setStatus({ type: "success", text: "Thanks! Our admissions team will reach out soon." });
      setForm({ name: "", email: "", phone: "", program: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    }
  };

  return (
    <section id="admissions" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">Admissions</h2>
        <p className="text-blue-100/80 mt-2 mb-8">Tell us about your child and we’ll get in touch.</p>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
          <input name="name" value={form.name} onChange={onChange} placeholder="Parent/Guardian Name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/60" required />
          <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/60" required />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/60" />
          <input name="program" value={form.program} onChange={onChange} placeholder="Interested Program / Grade" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/60" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us a bit about your child" rows={4} className="md:col-span-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/60" required />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">Submit Inquiry</button>
            {status?.type === "loading" && <span className="text-blue-200">{status.text}</span>}
            {status?.type === "success" && <span className="text-green-300">{status.text}</span>}
            {status?.type === "error" && <span className="text-red-300">{status.text}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
