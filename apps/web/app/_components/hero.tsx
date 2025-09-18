import { AnimatedShinyText } from "@workspace/ui/components/animated-shiny-text";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex h-[calc(70svh)] flex-col items-center justify-center space-y-6">
      <div
        className={cn(
          "group animate-fade-up rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Brandak</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      <h1 className="max-w-3xl animate-fade-up text-center font-bold text-5xl">
        Create a Unique Logo in a Matters of Seconds — Powered by AI.
      </h1>
      <p className="max-w-2xl animate-fade-up text-center text-muted-foreground">
        Bring your brand to life with stunning, professional logos. No design
        skills needed — just your vision and our AI delivering unique designs in
        seconds.
      </p>

      <div className="mt-10 flex items-center space-x-6">
        <Button className="group" size={"sm"}>
          Get started
          <ArrowRightIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </Button>
        <Button className="p-4" size={"sm"} variant={"outline"}>
          Learn More
        </Button>
      </div>
    </section>
  );
}
