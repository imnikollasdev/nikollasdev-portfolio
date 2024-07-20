import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";

export function Footer() {
  return (
    <footer className="w-full h-full relative">
      <Image
        className="-z-10 bg-[#161616]"
        src="/main/background.svg"
        alt="Background"
        style={{ objectFit: "cover" }}
        fill={true}
        quality={100}
        priority
      />
      <div className="px-4 mx-auto max-w-[120.0rem]">
        <div className="py-[2.0rem] sm:py-[8.0rem] sm:flex sm:justify-between">
          <div className="sm:max-w-[40%]">
            <h1 className="text-[2.0rem] text-[#9A9A9A] font-bold">
              NIKOLLAS GREGORY
            </h1>

            <h2 className="mt-[2.0rem] text-[1.4rem]">
              Sou um desenvolvedor junior especializado em criar sistemas
              responsivos e otimizados, adaptados perfeitamente às suas
              necessidades e preferências.
            </h2>
          </div>

          <div className="mt-[2.0rem] sm:mt-[2.0rem]">
            <h1 className="text-[2.0rem] text-[#9A9A9A]">CONTATOS</h1>

            <div className="mt-[2.0rem] text-[#9A9A9A] flex items-center gap-3">
              <a
                href="https://github.com/imnikollasdev"
                aria-label="Redirecionar para github."
              >
                <AiFillGithub size={25} />
              </a>

            </div>
          </div>
        </div>
        <div className="py-[4.0rem] border-t-2 border-[#515151]">
          <p className="text-[1.3rem] text-[#9A9A9A] text-center">
            © Copyright 2024. Desenvolvido por Nikollas DEV.
          </p>
        </div>
      </div>
    </footer>
  );
}
