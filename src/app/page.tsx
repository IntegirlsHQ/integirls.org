import NextLink from "next/link";
import {
  Box,
  Button,
  CalloutIcon,
  CalloutText,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import { Heart, HelpingHand, Sparkles } from "lucide-react";

import { Banner } from "@/components/pieces/banner";

export default function Home() {
  return (
    <Flex direction="column">
      {/* Background Gradient */}
      <Box
        className="absolute left-0 top-0 -z-20 h-full w-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, var(--plum-4), var(--slate-1), var(--color-background))",
        }}
      />
      {/* Hero */}
      <Section className="relative flex-none py-48">
        <Container>
          <Flex className="relative" align="stretch" direction="column" gap="6">
            <Flex
              direction="column"
              gap="4"
              align="center"
              className="text-center"
            >
              <Banner>
                <CalloutIcon>
                  <Sparkles size={16} />
                </CalloutIcon>
                <CalloutText>
                  Check out our October Newsletter{" "}
                  <Link asChild>
                    <NextLink href="/new-website">here</NextLink>
                  </Link>
                  !
                </CalloutText>
              </Banner>

              <Heading
                size="9"
                weight="bold"
                className="max-w-5xl font-extrabold"
              >
                Let&rsquo;s close the{" "}
                <Text
                  color="plum"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--plum-11), var(--plum-9))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "repeat",
                  }}
                >
                  gender gap
                </Text>{" "}
                in competitive problem solving.
              </Heading>
              <Text size="4" color="gray" className="max-w-3xl">
                Integirls is a global nonprofit community of girls dedicated to
                empowering minoritized gender groups in STEM. We run events like
                math competitions and puzzle hunts, inspiring thousands of girls
                to pursue their passions.
              </Text>
            </Flex>

            <Flex gap="4" justify="center">
              <Button variant="classic" size="3">
                <Heart size={18} /> Get Involved
              </Button>
              <Button variant="surface" size="3">
                <HelpingHand size={18} /> Donate
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section className="text-center">
        <Heading size="9">Content!</Heading>
      </Section>

      <Section className="text-center" size="3">
        <Heading size="9">Content!</Heading>
      </Section>

      <Section className="text-center">
        <Heading size="9">Even More Content!</Heading>
      </Section>
    </Flex>
  );
}
