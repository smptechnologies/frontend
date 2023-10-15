import Features from "@/components/features";
import FeaturesBlocks from "@/components/featureBlocks";
import Image from "next/image";
import Cover from "@/images/herohome-cover.jpg";
import Moneris from "@/images/cropped-Logo_Moneris.webp";
import LemosDesign from "@/images/companies/lemos-design.png";
import MFIntegra from "@/images/companies/mfintegra.png";
import { i18n } from "../../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((l) => ({
    lang: l,
  }));
}

export default function IndexPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const moto: { [index: string]: string } = {
    en: "Transforming business with ",
    pt: "Transforme o seu negócio com ",
  };

  const motoLastWord: { [index: string]: string } = {
    en: "intelligence",
    pt: "inteligência",
  };

  const briefDescription: { [index: string]: string } = {
    en: "Our AI services empower your business processes and can uncover untapped potential revenue",
    pt: "Os nossos serviços de IA permitem otimizar os seus processos de negócio e descobrir receitas ainda por explorar",
  };

  const testimonials: { [index: string]: string } = {
    en: "Our clients",
    pt: "Os nossos clientes",
  };

  const testimonialsContent: { [index: string]: string } = {
    en: "Some of the brands who trust our services",
    pt: "Algumas das marcas que confiam nos nossos serviços",
  };

  return (
    <div>
      <div id="home" className="relative ">
        {/* Illustration behind hero content */}

        <Image
          className="absolute left-0 top-0 h-[16rem] w-full object-position-center object-cover min-h-full opacity-40 z-0"
          src={Cover}
          alt="Escalator stairs"
        ></Image>

        <div className="pt-48 pb-12 md:pt-48 md:pb-20 relative z-10">
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
      </div>

      <Features lang={lang} />
      <div className="relative isolate overflow-hidden bg-white px-6 my-24">
        <FeaturesBlocks lang={lang} />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

        <div className="pt-16 max-w-3xl lg:mx-auto mx-2 text-center ">
          <h2 className="h2 mb-4">{testimonials[lang]}</h2>
          <h3 className="text-xl text-gray-600">{testimonialsContent[lang]}</h3>
        </div>

        <section>
          <div className="mx-auto w-full max-w-5xl px-5 py-12 md:px-10 md:py-16 lg:py-20 mt-16">
            <div className="grid gap-16 md:grid-cols-3">
              <div className="mx-auto">
                <Image src={Moneris} alt="moneris" className="inline-block" />
              </div>
              <div className="mx-auto px-16 pt-0 md:pb-16 -mt-6">
                <Image
                  src={LemosDesign}
                  alt="lemos design"
                  className="inline-block"
                />
              </div>
              <div className="mx-auto">
                <Image
                  src={MFIntegra}
                  alt="mf integra"
                  className="inline-block"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
