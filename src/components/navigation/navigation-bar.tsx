import Link from "next/link";
import { navigationMenuConfig } from "@/configs/menus/navigation-menu";
import { Button, Container, Flex } from "@radix-ui/themes";

import { Logo } from "../branding/logo";

export const NavigationBar = () => {
  return (
    <Container className="fixed top-0 z-50 w-full flex-none px-6 py-4">
      <Flex justify="between" align="center">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Navigation Menus */}
        <Flex justify="end" align="baseline" gap="6">
          {navigationMenuConfig.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="font-medium"
              size="3"
              asChild
            >
              <Link href={item.path}>{item.title}</Link>
            </Button>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
