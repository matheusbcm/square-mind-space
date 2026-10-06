
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="border-b border-border px-5 py-4 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="#inicio" className="min-w-0" aria-label="Ir para o início">
          <span className="block truncate text-sm font-semibold uppercase md:text-base">
            {profile.displayName}
          </span>
          <span className="block text-xs text-muted-foreground">{profile.crp}</span>
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              <span className="hidden sm:inline">Contato</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
