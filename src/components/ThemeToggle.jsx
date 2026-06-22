import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.88 }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-signal/50 hover:text-signal"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {isDark ? <FiSun className="h-[15px] w-[15px]" /> : <FiMoon className="h-[15px] w-[15px]" />}
      </motion.div>
    </motion.button>
  );
}