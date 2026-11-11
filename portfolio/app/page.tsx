import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { StatsStrip } from "@/components/sections/StatsStrip";

export default function HomePage() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-canvas">
      <SiteHeader />

      <main id="main-content" className="relative flex-1">
        <div className="mx-auto w-full max-w-shell px-6">
          <HeroSection />
          <StatsStrip />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}