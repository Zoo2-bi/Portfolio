"use client";

import { Github, Globe } from "lucide-react";

const projects = [
  {
    side: "left",
    label: "고객 데이터 분석 기반 요금제 추천 및 관리 서비스",
    date: "2026.02 ~ 2026.03 (7명)",
    stack: [
      "Next.js",
      "Typescript",
      "React",
      "TanStack Query",
      "Zustand",
      "Recharts",
    ],
    title: "U+NIVERSE 고객 데이터 기반 요금제 추천 서비스 개발",
    desc: [
      "고객 데이터 기반 요금제 추천 기능 구현",
      "Recharts 기반 데이터 시각화 대시보드 구현",
      "TanStack Query 기반 서버 상태 관리",
      "Zustand 기반 전역 상태 관리",
    ],
    github: "https://github.com/one-year-gap",
    demo: "https://one-year-gap.github.io/docs/#posts",
  },
  {
    side: "right",
    label: "AI 기반 일기 분석을 통한 감정 상태 관리 시스템",
    date: "2025.11 ~ 2025.12 (3명)",
    stack: ["React", "Typescript", "Tailwind"],
    title: "사용자 기록 관리 서비스 Record 개발",
    desc: [
      "사용자 기록 CRUD 기능 구현",
      "컴포넌트 재사용 구조 설계",
      "반응형 UI 구현",
    ],
    github: "https://github.com/Ureca3rd-FE/record-fe",
    demo: "https://example.com",
  },
  {
    side: "left",
    label: "서비스 상담 요약 기반 추천 시스템",
    date: "2025.10 (4명)",
    stack: ["React", "Javascript", "CSS"],
    title: "Unity 웹 서비스 프론트엔드 개발",
    desc: [
      "컴포넌트 기반 UI 구조 설계",
      "페이지 레이아웃 및 반응형 UI 구현",
    ],
    github: "https://github.com/U-nify",
    demo: "https://example.com",
  },
  {
    side: "right",
    label: "AI 블랙박스 분석 과실 측정 웹사이트",
    date: "2024 (5명)",
    stack: ["Next.js", "Typescript", "Tailwind"],
    title: "웹사이트 디자인 및 퍼블리싱",
    desc: [
      "전체 UI/UX 설계",
      "Next.js 기반 서비스 구조 설계",
      "프로젝트 및 활동 이력 페이지 구현",
    ],
    demo: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen bg-[#e9e9e9] px-10 py-24">

      <h2 className="mb-25 text-7xl text-center font-extrabold text-[#D1BD10] [text-shadow:6px_6px_0px_#323335]">
  Projects.
</h2>

      {/* PROJECT LIST */}
      <div className="mx-auto max-w-6xl space-y-16">

        {projects.map((project, i) => (
          <div
            key={i}
            className={`flex ${
              project.side === "right" ? "justify-end" : "justify-start"
            }`}
          >
            {/* CARD */}
            <div className="relative w-[650px] rounded-3xl border border-[#D1BD10] bg-white p-10 shadow-sm transition duration-300 hover:shadow-xl">

              {/* LABEL */}
              <div
                className={`absolute -top-6 ${
                  project.side === "right" ? "right-8" : "left-8"
                } rotate-[-10deg] rounded-full bg-[#D1BD10] px-6 py-2 text-sm font-semibold text-black`}
              >
                {project.label}
              </div>

              {/* DATE */}
              <div className="absolute right-10 top-4 text-sm text-gray-400">
                {project.date}
              </div>

              {/* STACK */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h3 className="mb-4 text-xl font-semibold text-[#D1BD10]">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <ul className="space-y-1 text-sm text-gray-700">
                {project.desc.map((d, idx) => (
                  <li key={idx}>• {d}</li>
                ))}
              </ul>

              {/* ICON LINKS */}
              <div className="absolute bottom-6 right-8 flex gap-4 text-[#D1BD10]">
                <a
                  href={project.github}
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <Github size={24} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <Globe size={24} />
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}