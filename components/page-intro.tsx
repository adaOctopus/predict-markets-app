"use client";

import { motion } from "framer-motion";

type PageIntroProps = {
  title: string;
  subtitle: string;
};

export function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-8 space-y-3"
    >
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
      <p className="max-w-3xl text-base text-slate-300 md:text-lg">{subtitle}</p>
    </motion.section>
  );
}
