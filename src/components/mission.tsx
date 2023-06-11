import React from "react";
import Image from "next/image";

import Jets from "../images/pexels-spencer-davis-4400026.jpg";

function Mission({ lang }: { lang: string }) {
  const mission: { [index: string]: string } = {
    en: "Our mission",
    pt: "Missão",
  };

  const aboutSMPMission: { [index: string]: string[] } = {
    en: [
      "At SMP Technologies, we believe that our values are what sets us apart. Our mission is to help organizations unlock their full potential by providing high-quality, tailored technology solutions and consulting services that drive growth and success. We understand that every business is unique, and we take pride in working closely with our clients to understand their needs, goals, and challenges.",
      "We prioritize innovation, integrity, and customer satisfaction in all that we do. Our team of experts is committed to providing the highest level of service and support to our clients. We believe that our success is directly tied to the success of our clients, and we work tirelessly to ensure that we deliver the best possible solutions. We look forward to the opportunity to work with you and help you achieve your business goals.",
    ],
    pt: [
      "Acreditamos que os valores são o que nos diferencia. A nossa missão prende-se por ajudar as organizações a desbloquearem o seu pleno potencial, fornecendo soluções de tecnologia e serviços de consultoria de alta qualidade que impulsionam o crescimento e o sucesso. Sabemos que cada negócio é único e orgulhamo-nos de trabalhar lado a lado com os nossos clientes para que consigamos entender as suas necessidades, objetivos e desafios. ",
      "Priorizamos a inovação, a integridade e a satisfação dos clientes em tudo o que fazemos. Ainda, acreditamos que o sucesso está diretamente ligado ao sucesso dos nossos clientes, pelo que trabalhamos incansavelmente para entregar as melhores soluções possíveis. Esperamos ter a oportunidade de trabalhar com a sua empresa e ajudá-lo a alcançar seus objetivos empresariais.",
    ],
  };

  return (
    <section className="">
      <div className="mx-6 pb-12 pt-16 md:pt-32 2xl:mx-80">
        <div className="grid md:grid-cols-2 gap-16">
          <Image
            className="hidden h-[40rem] w-[27rem] md:grid place-self-center -mt-6 rounded-md shadow-lg"
            src={Jets}
            alt="Jet fighters in formation"
          />
          <div className="max-w-3xl mx-auto">
            <h1 className="h1 pb-10">{mission[lang]}</h1>
            <div className="text-xl text-gray-600">
              <p className="pb-5">{aboutSMPMission[lang][0]}</p>
              <p className="py-5">{aboutSMPMission[lang][1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
