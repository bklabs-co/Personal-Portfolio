import { motion } from "framer-motion";

const ITEMS = [
  "React.js", "Node.js", "Express.js", "Django", "PostgreSQL",
  "Tailwind CSS", "Docker", "Cloudflare", "JavaScript ES6+", "Python",
  "REST APIs", "JWT Auth", "Access Control", "Full Stack Dev", "MERN Stack",
];

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/30 py-4 select-none" aria-hidden="true">
      <motion.div
        className="flex w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center px-5">
            <span className="chip uppercase tracking-[0.14em] text-faint whitespace-nowrap">{item}</span>
            <span className="ml-5 h-1 w-1 rounded-full bg-signal/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}