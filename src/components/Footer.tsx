import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-container border-t border-border py-8 mt-12">
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
        <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
        <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2025 Ѕᴏʟᴏ Tʀᴇᴇ. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
