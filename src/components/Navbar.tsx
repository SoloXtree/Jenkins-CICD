import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/img/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 gradient-container backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between h-14 px-6">
        <Link to="/" className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <img src={logoImg} alt="Solo Tree" className="w-6 h-6" />
          Ѕᴏʟᴏ Tʀᴇᴇ
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://t.me/Solo_Tree_support"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Support
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden gradient-container border-t border-border px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://t.me/Solo_Tree_support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
