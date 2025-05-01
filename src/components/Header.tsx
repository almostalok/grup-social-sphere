
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between bg-white/95 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-grupmate-purple text-white rounded-lg w-9 h-9 flex items-center justify-center font-bold text-xl">G</div>
        <span className="text-xl font-bold text-grupmate-dark">Grupmate</span>
      </Link>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/dashboard" className="text-gray-600 hover:text-grupmate-purple transition-colors">
          Dashboard
        </Link>
        <Link to="#features" className="text-gray-600 hover:text-grupmate-purple transition-colors">
          Features
        </Link>
        <Link to="#how-it-works" className="text-gray-600 hover:text-grupmate-purple transition-colors">
          How It Works
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-grupmate-purple hover:bg-purple-600 text-white">Sign Up</Button>
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 md:hidden flex flex-col gap-4 animate-fade-in">
          <Link to="/dashboard" className="text-gray-600 py-2 hover:text-grupmate-purple transition-colors">
            Dashboard
          </Link>
          <Link to="#features" className="text-gray-600 py-2 hover:text-grupmate-purple transition-colors">
            Features
          </Link>
          <Link to="#how-it-works" className="text-gray-600 py-2 hover:text-grupmate-purple transition-colors">
            How It Works
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full">Log In</Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full bg-grupmate-purple hover:bg-purple-600 text-white">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
