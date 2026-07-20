import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <header className="container flex items-center justify-between py-6">
        <h1 className="text-xl font-semibold">Will Fan</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      <main className="container py-24">
        <h2 className="mb-6 text-5xl font-bold">
          Building quantitative tools for financial markets.
        </h2>

        <p
          className="max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Incoming Chicago Booth MiF student exploring systematic investing,
          portfolio construction, and the intersection of machine learning and
          finance.
        </p>
      </main>
    </div>
  );
}

export default App;