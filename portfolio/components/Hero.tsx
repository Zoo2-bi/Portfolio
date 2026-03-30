"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import moon from "@/assets/moon.png"

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#E9E9E9] overflow-hidden">

      {/* corner frame */}
      <div className="absolute left-10 top-10 h-10 w-10 border-l-4 border-t-4 border-gray-400" />
      <div className="absolute right-10 top-10 h-10 w-10 border-r-4 border-t-4 border-gray-400" />
      <div className="absolute left-10 bottom-10 h-10 w-10 border-l-4 border-b-4 border-gray-400" />
      <div className="absolute right-10 bottom-10 h-10 w-10 border-r-4 border-b-4 border-gray-400" />

      {/* moon */}
      <Image
        src={moon}
        alt="moon"
        width={800}
        height={800}
        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 opacity-80 items-center justify-center"
      />

      {/* PARK */}
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-[16%] top-[33%] text-[140px] font-bold tracking-tight"
      >
        PARK
      </motion.h1>

      {/* JU I */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-[44%] top-[33%] -translate-x-1/2 text-[140px] font-bold text-white"
      >
        JU I
      </motion.h1>

      {/* FRON */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-[43%] top-[52%] text-[140px] font-bold text-white"
      >
        FRON
      </motion.h1>

      {/* TEND */}
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-[65%] top-[52%] text-[140px] font-bold tracking-tight"
      >
        TEND
      </motion.h1>

      {/* description */}
      <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 text-center">
        <p className="text-lg font-semibold text-gray-700">
          꿈꾸는 모든걸 현실로 만드는 개발자
        </p>

        <p className="mt-4 text-sm text-gray-500">
          다양한 직군과 빠르게 협업하는 환경에선,
          <br />
          서로 믿고 이야기할 수 있는 사람이 가장 큰 자산이라 생각합니다.
        </p>
      </div>

    </section>
  )
}