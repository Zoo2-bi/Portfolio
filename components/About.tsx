"use client"

import Image from "next/image"

export default function AboutCard() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#e9e9e9] px-6 py-20">
      <div className="w-full max-w-6xl rounded-[40px] bg-white p-16 shadow-xl">

        {/* top area */}
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">

          {/* avatar */}
          <div className="flex flex-col items-center">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#FEF071]">
              <span className="absolute -top-4 rotate-[-10deg] rounded-full bg-gray-700 px-4 py-2 text-sm font-semibold text-white">
                Developer
              </span>

              <span className="text-6xl">😊</span>
            </div>
          </div>

          {/* contact */}
          <div className="relative flex w-full max-w-md flex-col gap-6">

            <a className="rounded-full bg-gray-700 px-6 py-4 text-center text-white transition-colors hover:bg-[#D1BD10]">
              bagjui068@gmail.com
            </a>

            <a
  href="https://github.com/Zoo2-bi"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gray-700 px-6 py-4 text-center text-white transition-colors hover:bg-[#D1BD10]"
>
  GITHUB
</a>

<a
  href="https://jjliliung.tistory.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gray-700 px-6 py-4 text-center text-white transition-colors hover:bg-[#D1BD10]"
>
  TSTORY
</a>

<a
  href="/resume.pdf"
  target="_blank"
  className="rounded-full bg-gray-700 px-6 py-4 text-center text-white transition-colors hover:bg-[#D1BD10]"
>
  RESUME
</a>

            {/* border decoration */}
            <div className="pointer-events-none absolute -left-6 top-2 h-[85%] w-[110%] rounded-[30px] "></div>

          </div>
        </div>

        {/* description */}
        {/* description */}
<div className="mt-16 text-center leading-relaxed text-gray-700">

  <p className="text-lg">
    사용자에게 <span className="font-bold text-[#D1BD10]">편안한 경험</span>을
    전달하는 인터페이스를 만드는
    <span className="font-semibold text-[#D1BD10]"> 프론트엔드 개발자</span>입니다.
  </p>

  <p className="mt-4">
    단순히 화면을 구현하는 것을 넘어,  
    서비스의 흐름과 구조를 이해하며
    더 나은 사용자 경험을 만드는 개발을 지향합니다.
  </p>

  <p className="mt-6">
    새로운 기술을 배우는 것을 즐기며  
    다양한 사람들과 협업하며 성장하는 과정에서
    개발의 재미를 발견하고 있습니다.
  </p>

  <p className="mt-4">
    작은 디테일 하나까지 고민하며  
    <span className="font-semibold text-[#D1BD10]">
      더 좋은 서비스를 만드는 개발자
    </span>
    로 계속 발전해 나가고 싶습니다.
  </p>

</div>

      </div>
    </section>
  )
}