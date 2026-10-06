
import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-5 py-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-6" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {profile.displayName}. Todos os direitos reservados.</p>
          <p>{profile.role} · {profile.crp}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
