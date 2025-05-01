
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center">
      <div className="text-lg font-medium">Dr. Psychology</div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#about" className="hover:text-primary/80 transition-colors">
          About
        </a>
        <a href="#experience" className="hover:text-primary/80 transition-colors">
          Experience
        </a>
        <a href="#training" className="hover:text-primary/80 transition-colors">
          Training
        </a>
        <a href="#contact" className="hover:text-primary/80 transition-colors">
          Contact
        </a>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
