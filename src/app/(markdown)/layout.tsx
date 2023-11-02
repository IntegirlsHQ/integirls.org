import { Container, Flex } from "@radix-ui/themes";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container size="4" className="my-12 px-6">
      <Flex justify="center">
        <article className="prose prose-invert max-w-[70ch]">
          {children}
        </article>
      </Flex>
    </Container>
  );
}
