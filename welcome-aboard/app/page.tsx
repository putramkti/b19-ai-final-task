import { ActionCluster } from "@/components/sections/ActionCluster";
import { AmbientBackdrop } from "@/components/sections/AmbientBackdrop";
import { DeckFooter } from "@/components/sections/DeckFooter";
import { HeroBadge } from "@/components/sections/HeroBadge";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { HighlightCards } from "@/components/sections/HighlightCards";
import { SiteHeader } from "@/components/sections/SiteHeader";

export default function HomePage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-canvas">
      <AmbientBackdrop />

      <SiteHeader />

      <main
        id="main-content"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-12 sm:px-6 lg:px-12 lg:py-[93px]"
      >
        <div className="flex w-full max-w-content flex-col items-center">
          <HeroBadge />
          <HeroHeadline />
          <HighlightCards />
          <ActionCluster />
        </div>
      </main>

      <DeckFooter />
    </div>
  );
}