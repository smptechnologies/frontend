import React from "react";
import Cover from "../images/herohome-cover.jpg";
import Image from "next/image";

function HeroHome({ lang }: { lang: string }) {
  const moto: { [index: string]: string } = {
    en: "Transforming business with ",
    pt: "Transformar o negócio com ",
  };

  const motoLastWord: { [index: string]: string } = {
    en: "intelligence",
    pt: "inteligência",
  };

  const briefDescription: { [index: string]: string } = {
    en: "Our AI services empower your business processes and can uncover untapped potential revenue.",
    pt: "Os nossos serviços de IA permitem otimizar os seus processos de negócio e descobrir receitas ainda por explorar.",
  };

  return (
    <section id="home" className="relative ">
      {/* Illustration behind hero content */}

      <Image
        className="absolute left-0 top-0 h-[16rem] w-full object-position-center object-cover min-h-full opacity-40 z-0"
        src={Cover}
        alt="Escalator stairs"
      ></Image>

      {/* Hero content */}
      <div className="pt-48 pb-12 md:pt-48 md:pb-20 relative z-10" >
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mt-4">
            {moto[lang]}
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-400">
            {motoLastWord[lang]}
          </h1>
          <div className="max-w-3xl sm:mx-auto mx-2">
            <p className="text-2xl text-gray-600 my-8">
              {briefDescription[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
