import { Locale } from "../../../../i18n-config";
import Team from "@/components/team";
import Image from "next/image";
import Jets from "@/images/pexels-spencer-davis-4400026.jpg";
import { i18n } from "../../../../i18n-config";

import Lisbon from "@/images/pexels-monica-silvestre-1548024.jpg";
import Tech from "@/images/pexels-cottonbro-studio-4065885.jpg";
import AI from "@/images/pexels-tara-winstead-8386361.jpg";

export const metadata = {
  description: "What is the company and where it's headed.",
};



export async function generateStaticParams() {
  return i18n.locales.map((l) => ({
    lang: l,
  }));
}

export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const aboutSMP: { [index: string]: string } = {
    en: "About SMP Technologies",
    pt: "Sobre a SMP Technologies",
  };

  const aboutSMPContent: { [index: string]: string } = {
    en: "Welcome to SMP Technologies, a Portugal-based technology company dedicated to delivering innovative solutions to help businesses achieve their full potential. Our origin is rooted in the desire to make a difference in the technology industry. We understand that in today's ever-evolving market, businesses need to be agile and adaptable to stay ahead. That's why we aim to provide cutting-edge technology solutions tailored to our clients' specific needs.",
    pt: "Bem-vindo à SMP Technologies, uma empresa de tecnologia sediada em Portugal dedicada a fornecer soluções inovadoras para que os nossos parceiros consigam atingir o seu verdadeiro potencial. A nossa origem vem do desejo de fazer a diferença na indústria. Atualmente, com o mercado em constante evolução, as empresas precisam de ser ágeis e flexíveis para que se possam manter em destaque. É por isso que temos como objetivo principal construir soluções adaptadas às necessidades específicas de nossos clientes.",
  };

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
    <div className=" ">
      <div className="mx-6 max-w-7xl md:mx-20 xl:mx-auto">
        {/* company header */}
        <div className="pb-12 pt-12 lg:pt-64 ">
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

        <div className="pb-12 pt-16 md:pt-32">
          <div className="grid md:grid-cols-2 gap-16">
            <Image
              className="hidden h-[40rem] w-[27rem] md:grid  -mt-6 rounded-md shadow-lg"
              src={Jets}
              alt="Jet fighters in formation"
            />
            <div className="max-w-3xl ">
              <h1 className="h1 pb-10">{mission[lang]}</h1>
              <div className="text-xl text-gray-600">
                <p className="pb-5">{aboutSMPMission[lang][0]}</p>
                <p className="py-5">{aboutSMPMission[lang][1]}</p>
              </div>
            </div>
          </div>
        </div>

        <Team lang={lang} />
      </div>
    </div>
  );
}
