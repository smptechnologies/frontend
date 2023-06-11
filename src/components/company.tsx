import React from "react";
import Image from "next/image";

import Lisbon from "../images/pexels-monica-silvestre-1548024.jpg";
import Tech from "../images/pexels-cottonbro-studio-4065885.jpg";
import AI from "/home/twigs/smp/v3/src/images/pexels-tara-winstead-8386361.jpg";

function Company({ lang }: { lang: string }) {
  const aboutSMP: { [index: string]: string } = {
    en: "About SMP Technologies",
    pt: "Sobre a SMP Technologies",
  };

  const aboutSMPContent: { [index: string]: string } = {
    en: "Welcome to SMP Technologies, a Portugal-based technology company dedicated to delivering innovative solutions to help businesses achieve their full potential. Our origin is rooted in the desire to make a difference in the technology industry. We understand that in today's ever-evolving market, businesses need to be agile and adaptable to stay ahead. That's why we aim to provide cutting-edge technology solutions tailored to our clients' specific needs.",
    pt: "Bem-vindo à SMP Technologies, uma empresa de tecnologia sediada em Portugal dedicada a fornecer soluções inovadoras para que os nossos parceiros consigam atingir o seu verdadeiro potencial. A nossa origem vem do desejo de fazer a diferença na indústria. Atualmente, com o mercado em constante evolução, as empresas precisam de ser ágeis e flexíveis para que se possam manter em destaque. É por isso que temos como objetivo principal construir soluções adaptadas às necessidades específicas de nossos clientes.",
  };

  return (
    <section className="">
      <div className="mx-6 pb-12 pt-12 lg:pt-64 2xl:mx-52">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:max-w-4xl lg:mx-auto ">
            <h1 className="h1 pt-32 pb-10 ">{aboutSMP[lang]}</h1>
            <p className="max-w-lg xl:max-w-2xl text-xl pb-16 text-gray-600">
              {aboutSMPContent[lang]}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Tech}
              className="place-self-center rounded-md shadow-lg"
              height={500}
              width={250}
              alt="Using tablet"
            />

            <div className="grid grid-rows-2 gap-6">
              <Image
                src={Lisbon}
                className="rounded-md shadow-lg lg:-mt-12 "
                height={500}
                width={250}
                alt="Lisbon"
              />
              <Image
                src={AI}
                className="rounded-md shadow-lg"
                height={500}
                width={250}
                alt="AI"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
