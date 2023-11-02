"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "../utils";

export const MotionDiv = motion.div;
export const MotionP = motion.p;

interface DynamicHeightDivProps {
  children: React.ReactNode;
  className?: string;
}

export const DynamicHeightDiv: React.FC<DynamicHeightDivProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className={cn(className, "overflow-hidden")}
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.2 }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};

interface DynamicWidthDivProps {
  children: React.ReactNode;
  className?: string;
}

export const DynamicWidthDiv: React.FC<DynamicWidthDivProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height;
        setWidth(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className={cn(className, "overflow-hidden")}
      style={{ width }}
      animate={{ width }}
      transition={{ duration: 0.2 }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};
