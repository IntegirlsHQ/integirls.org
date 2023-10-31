"use client";

import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export const InterfaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <Theme
        appearance="dark"
        accentColor="plum"
        grayColor="slate"
        panelBackground="translucent"
        hasBackground={false}
        radius="large"
        isRoot
      >
        {children}
      </Theme>
    </ThemeProvider>
  );
};
