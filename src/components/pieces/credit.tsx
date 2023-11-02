"use client";

import { useState } from "react";
import { MotionDiv } from "@/libs/motion";
import { Flex, Link, Text } from "@radix-ui/themes";
import { AnimatePresence } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export const Credit = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex align="center" justify="end" className="group h-4 gap-1.5">
      <AnimatePresence mode="wait">
        {open && (
          <MotionDiv
            key="creditsText"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, type: "spring" }}
          >
            <Text size="1" color="gray" weight="medium" className="select-none">
              Crafted by{" "}
              <Link
                color="iris"
                href="https://x.com/itsmingjie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mingjie
              </Link>{" "}
            </Text>
          </MotionDiv>
        )}

        {!open && (
          <Text
            key="creditsIcon"
            color="plum"
            className="cursor-pointer"
            asChild
            onClick={() => setOpen(true)}
          >
            <MotionDiv
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, type: "spring" }}
            >
              <HeartHandshake size={16} />
            </MotionDiv>
          </Text>
        )}
      </AnimatePresence>
    </Flex>
  );
};
