"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#E9E9E9] overflow-hidden">
      <Image
        src="/images/moon.png"
        alt="moon"
        width={800}
        height={800}
        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 opacity-80"
      />

      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-[16%] top-[33%] text-[140px] font-bold"
      >
        PARK
      </motion.h1>

      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-[44%] top-[33%] -translate-x-1/2 text-[140px] font-bold text-white"
      >
        JU I
      </motion.h1>

      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-[43%] top-[52%] text-[140px] font-bold text-white"
      >
        FRON
      </motion.h1>

      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-[65%] top-[52%] text-[140px] font-bold"
      >
        TEND
      </motion.h1>
    </section>
  );
}
