import { createMetadata } from "@workspace/seo/metadata";
import type { Metadata } from "next";
import { HeroSection } from "./_components/hero";
import { SiteHeader } from "./_components/site-header";

export const metadata: Metadata = createMetadata({
  title: "Brandak | AI Powered Logo Maker",
  description:
    "Generate stunning, professional logos instantly with Brandak’s AI powered logo maker. No design skills required — just your vision and our technology.",
  image: "/my-page-image.png",
});
export default function Page() {
  return (
    <div className="relative">
      <SiteHeader />
      <HeroSection />
    </div>
  );
}
