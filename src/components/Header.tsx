import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const Header = () => (
  <header className="py-6 px-4 md:px-8 flex justify-between items-center gap-4">
    <div>
      <div className="text-lg font-medium leading-tight">{profile.name}</div>
      <div className="text-xs text-muted-foreground tracking-wider">{profile.crp}</div>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="outline" asChild><a href="#contato">Contato</a></Button>
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
