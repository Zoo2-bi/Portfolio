"use client";

export default function StrengthSection() {
  const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "TanStack Query",
    "Zustand",
    "TailwindCSS",
    "Sass",
    "Storybook",
  ];

  return (
    <section className="min-h-screen bg-[#e9e9e9] px-6 py-32">

      {/* title */}
      <div className="mb-20 text-center">
        <h2 className="text-6xl font-bold text-[#D1BD10] [text-shadow:4px_4px_0_#8a8a8a]">
  Strength.
</h2>
        <p className="mt-4 text-gray-600">
          제가 프로젝트를 통해 쌓아온 프론트엔드 역량입니다.
        </p>
      </div>

      {/* skill tags */}
      <div className="mb-24 flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-700 shadow-sm transition hover:-translate-y-1 hover:border-[#D1BD10] hover:text-[#D1BD10]"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* cards */}
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

        {/* React */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

          <div className="mb-4 inline-block rounded-full bg-[#D1BD10]/10 px-4 py-1 text-sm font-semibold text-[#D1BD10]">
            React
          </div>

          <ul className="space-y-2 text-gray-700">
            <li>컴포넌트 기반 UI 구조 설계 및 재사용 컴포넌트 개발</li>
            <li>U+NIVERSE 프로젝트에서 React 기반 고객 관리 UI 구현</li>
            <li>Zustand, TanStack Query를 활용한 상태 관리 경험</li>
            <li>API 기반 데이터 흐름 설계 및 UI 연동 경험</li>
          </ul>

        </div>

        {/* Next */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

          <div className="mb-4 inline-block rounded-full bg-[#D1BD10]/10 px-4 py-1 text-sm font-semibold text-[#D1BD10]">
            Next.js
          </div>

          <ul className="space-y-2 text-gray-700">
            <li>Next.js App Router 기반 서비스 개발 경험</li>
            <li>Middleware를 활용한 인증 처리 로직 구현</li>
            <li>SSR / CSR 렌더링 방식 이해 및 활용</li>
            <li>포트폴리오 및 프로젝트 서비스 배포 경험</li>
          </ul>

        </div>

        {/* HTML CSS */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

          <div className="mb-4 inline-block rounded-full bg-[#D1BD10]/10 px-4 py-1 text-sm font-semibold text-[#D1BD10]">
            UI / CSS
          </div>

          <ul className="space-y-2 text-gray-700">
            <li>TailwindCSS 기반 디자인 시스템 스타일링 경험</li>
            <li>반응형 웹 구현 및 모바일 UI 대응</li>
            <li>Figma 디자인 기반 UI 구현 경험</li>
            <li>사용자 경험을 고려한 인터랙션 UI 개발</li>
          </ul>

        </div>

        {/* Javascript */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

          <div className="mb-4 inline-block rounded-full bg-[#D1BD10]/10 px-4 py-1 text-sm font-semibold text-[#D1BD10]">
            Javascript / Typescript
          </div>

          <ul className="space-y-2 text-gray-700">
            <li>ES6+ 문법 기반 Javascript 개발</li>
            <li>Typescript 기반 타입 안정성 있는 코드 작성</li>
            <li>REST API 기반 데이터 처리 및 비동기 로직 구현</li>
            <li>Git 기반 협업 및 코드 리뷰 경험</li>
          </ul>

        </div>

      </div>
    </section>
  );
}