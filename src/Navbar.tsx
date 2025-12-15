import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          DSA Visualizer
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-white">
          <Link to="/race" className="hover:text-purple-500">Race Mode</Link>
          <Link to="/algorithms/sorting" className="hover:text-purple-500">Sorting</Link>
          <Link to="/algorithms/searching" className="hover:text-purple-500">Searching</Link>
          <Link to="/about" className="hover:text-purple-500">About</Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-4 space-y-3 text-gray-800 dark:text-white">
          <Link to="/race" className="block hover:text-purple-500">Race Mode</Link>
          <Link to="/algorithms/sorting" className="block hover:text-purple-500">Sorting</Link>
          <Link to="/algorithms/searching" className="block hover:text-purple-500">Searching</Link>
          <Link to="/about" className="block hover:text-purple-500">About</Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
}