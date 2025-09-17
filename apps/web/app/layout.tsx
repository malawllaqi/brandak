import "@workspace/ui/globals.css";
import { fonts } from "@workspace/ui/lib/fonts";
import { cn } from "@workspace/ui/lib/utils";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(fonts, "scroll-smooth")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <main className="relative min-h-svh w-full">
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
              }}
            />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
