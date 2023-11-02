import { CalloutRoot } from "@radix-ui/themes";

export const Banner = ({ children }: { children: React.ReactNode }) => (
  <CalloutRoot size="1" className="mb-2 rounded-full px-5 py-2 font-medium">
    {children}
  </CalloutRoot>
);
