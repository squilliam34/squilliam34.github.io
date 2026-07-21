import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border px-3 py-2 transition hover:scale-105"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--surface)',
        color: 'var(--text)',
        cursor: 'pointer'
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}