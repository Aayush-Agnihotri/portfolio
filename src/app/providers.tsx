// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { TerminalContextProvider } from "react-terminal";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <TerminalContextProvider>
      {children}
      </TerminalContextProvider>
    </NextUIProvider>
  )
}