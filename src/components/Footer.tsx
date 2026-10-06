import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="py-8 px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      <Separator className="mb-6" />
      <p className="text-sm text-muted-foreground text-center md:text-left">
        © {new Date().getFullYear()} {profile.name} · {profile.title} · {profile.crp}
      </p>
    </div>
  </footer>
);

export default Footer;
