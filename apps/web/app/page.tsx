import { db } from "@workspace/db";
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

export const getData = async () => {
  const data = await db.query.logo.findMany();
  return data;
};
export default async function Page() {
  const data = await getData();

  console.log(data);
  return (
    <div className="relative">
      <SiteHeader />
      <HeroSection />
    </div>
  );
}
