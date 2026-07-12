import { useState } from "react";
import { Loader2, Send } from "lucide-react";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const initialValues = { name: "", email: "", message: "", "bot-field": "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values["bot-field"]) return; // honeypot tripped, silently drop

    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      });
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-hairline bg-surface p-8 text-center card-shadow">
        <p className="font-mono text-sm" style={{ color: "var(--signal)" }}>
          $ message --sent
        </p>
        <h3 className="mt-3 font-display text-xl font-bold">Thanks, that came through.</h3>
        <p className="mt-2 text-sm text-muted">I'll get back to you as soon as I can.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-hairline px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-hairline bg-surface p-6 card-shadow sm:p-8"
    >
      <p className="mb-1 font-mono text-sm" style={{ color: "var(--accent)" }}>
        $ send --message
      </p>

      {/* Honeypot field, hidden from real users */}
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" onChange={handleChange} value={values["bot-field"]} />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-hairline bg-soft px-4 py-3 text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-hairline bg-soft px-4 py-3 text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-hairline bg-soft px-4 py-3 text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#ef4444" }}>
          Something went wrong sending that. Try again, or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-70"
        style={{ background: "var(--accent)" }}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending
          </>
        ) : (
          <>
            <Send size={18} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
