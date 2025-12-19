// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";
import { TerminalContextProvider } from "react-terminal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <TerminalContextProvider>{children}</TerminalContextProvider>
    </HeroUIProvider>
  );
}
