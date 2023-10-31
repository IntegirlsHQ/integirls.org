import { Metadata } from "next";
import Link from "next/link";
import { Button, Container, Heading, Section, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <Section
      size="3"
      className="flex h-[70dvh] w-full min-w-0 items-center px-6"
    >
      <Container className="shrink grow basis-0">
        <Heading size="8">404: Out of Domain</Heading>

        <Text as="p" color="gray" className="mt-1 shrink grow basis-0">
          You&rsquo;ve ventured out of the domain &mdash; this page
          doesn&rsquo;t exist.
        </Text>

        <Button variant="classic" size="3" className="mt-12" asChild>
          <Link href="/">
            Return to origin <ArrowRight size={16} />
          </Link>
        </Button>
      </Container>
    </Section>
  );
}
