"use client";

import Image from "next/image";

export default function ActivitySection() {
  return (
    <section className="min-h-screen bg-[#e9e9e9] px-20 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-32">
        {/* LEFT AREA */}
        <div className="relative pl-16">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#D1BD10]" />

          <h2 className="mb-16 text-5xl font-extrabold text-[#2f2f2f]">
            Activity
            <span className="ml-2 inline-block h-3 w-20 bg-[#D1BD10]" />
          </h2>

          <div className="space-y-14">
            <div>
              <h3 className="text-2xl font-bold text-[#355f4a]">
                풀스택 웹 개발자 양성 교육 5기
                <span className="ml-3 text-sm text-gray-600">
                  2024.07 - 2024.12
                </span>
              </h3>
              <p className="mt-2 text-gray-500">
                SW 사업단에서 주최된 풀스택 웹개발자 교육 과정
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#355f4a]">
                LG 유플러스 유레카 프론트엔드
                <span className="ml-3 text-sm text-gray-600">
                  2025.08 - 2026.03
                </span>
              </h3>
              <p className="mt-2 text-gray-500">
                LG 유플러스 프론트엔드 교육 과정
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#355f4a]">
                안동 MICE 서포터즈 1기
                <span className="ml-3 text-sm text-gray-600">
                  2025.03 - 2025.11
                </span>
              </h3>
              <p className="mt-2 text-gray-500">지역 홍보 서포터즈 활동</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#355f4a]">
                SG 상상공작소 (프리랜서)
                <span className="ml-3 text-sm text-gray-600">
                  2024.06 - 2025.06
                </span>
              </h3>
              <p className="mt-2 text-gray-500">웹디자인 및 기획 외주 진행</p>
            </div>
          </div>
        </div>

        {/* RIGHT AREA */}
        <div className="flex flex-col items-center gap-6 pt-12">
          <Image
            src="/images/sang.png"
            alt="activity"
            width={320}
            height={420}
            className="rounded-lg border border-gray-300 shadow-md"
          />

          <Image
            src="/images/all.jpg"
            alt="activity"
            width={320}
            height={420}
            className="rounded-lg border border-gray-300 shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
