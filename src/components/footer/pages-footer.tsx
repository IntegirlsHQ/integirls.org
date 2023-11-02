import NextLink from "next/link";
import { footerAboutMenuConfig } from "@/configs/menus/footer-about";
import { footerResourcesMenuConfig } from "@/configs/menus/footer-resources";
import { Container, Flex, Grid, Heading, Link, Text } from "@radix-ui/themes";

import { Credit } from "../pieces/credit";

export const PagesFooter = () => (
  <Container className="px-12 pb-8 pt-16">
    <Flex direction="column" gap="6">
      <Grid
        columns={{
          initial: "1",
          sm: "4",
        }}
        gap="6"
      >
        <Flex direction="column" gap="3">
          <Heading size="5">Integirls</Heading>
          {footerAboutMenuConfig.map((item, index) => (
            <Text asChild key={index} color="gray">
              <NextLink href={item.path}>{item.title}</NextLink>
            </Text>
          ))}
        </Flex>

        <Flex direction="column" gap="3">
          <Heading size="5">Resources</Heading>

          {footerResourcesMenuConfig.map((item, index) => (
            <Text asChild key={index} color="gray">
              <NextLink href={item.path}>{item.title}</NextLink>
            </Text>
          ))}
        </Flex>
      </Grid>

      <Flex justify="between" align="end">
        <Flex direction="column" gap="1">
          <Text className="font-serif" size="3">
            &copy; 2023 INTEGIRLS, a Maryland 501(c)(3) nonprofit (EIN
            83-2751393)
          </Text>

          <Text color="gray" size="1">
            Code{" "}
            <Link
              color="gray"
              href="https://github.com/IntegirlsHQ/integirls.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source
            </Link>{" "}
            under the{" "}
            <Link
              color="gray"
              href="https://github.com/IntegirlsHQ/integirls.org/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </Link>
            . Assets and content may not be reused without permission.
          </Text>

          <Text color="gray" size="1">
            INTEGIRLS® is a registered trademark of Integirls Md Inc.
          </Text>
        </Flex>

        <Credit />
      </Flex>
    </Flex>
  </Container>
);
