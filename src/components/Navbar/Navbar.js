import { useMode } from '../../contexts/ModeContext';

export default function Navbar() {
  const { mode, setMode } = useMode();

  function handleToggle() {
    setMode(mode === 'simple' ? 'funny' : 'simple');
  }

  return (
    <nav className="Navbar flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="Navbar__logo text-2xl font-bold text-orange-600">
        🎯 TryPolish
      </h1>

      <div className="Navbar__controls flex items-center gap-4">
        <span className="Navbar__mode-label text-sm font-semibold">
          {mode === 'simple' ? '📝 Simple Mode' : '🤣 Funny Mode'}
        </span>
        <button
          onClick={handleToggle}
          className="Navbar__toggle-btn bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
        >
          Switch to {mode === 'simple' ? 'Funny' : 'Simple'}
        </button>
      </div>
    </nav>
  );
}
