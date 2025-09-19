"use client";
import { useSession } from "@workspace/auth/client";
import { Button } from "@workspace/ui/components/button";
import { Dice1 } from "lucide-react";

export function SiteHeader() {
  const session = useSession();

  return (
    <header className="sticky top-0 w-full">
      <nav className="mx-auto flex max-w-6xl animate-fade-up items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Dice1 className="size-5" />
          <h4 className="font-bold">Brandak</h4>
        </div>

        <div className="flex items-center space-x-6">
          {session.data ? (
            <Button size={"sm"} variant={"outline"}>
              Dashboard
            </Button>
          ) : (
            <Button size={"sm"} variant={"outline"}>
              Sign-in
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
