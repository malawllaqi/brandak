import { HeroSection } from "./_components/hero";
import { SiteHeader } from "./_components/site-header";

export default function Page() {
  return (
    <div className="relative">
      <SiteHeader />
      <HeroSection />
      <div className="h-screen" />
      <div className="h-screen" />
    </div>
  );
}
