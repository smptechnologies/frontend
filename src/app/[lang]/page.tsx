import Features from "@/components/features";
import FeaturesBlocks from "@/components/featureBlocks";
import Image from "next/image";
import Cover from "@/images/herohome-cover.jpg";
import Moneris from "@/images/cropped-Logo_Moneris.webp";
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

  const testimonials: { [index: string]: string } = {
    en: "Testimonials",
    pt: "Testemunhos",
  };

  const testimonialsContent: { [index: string]: string } = {
    en: "What our customers have to say",
    pt: "O que os nossos clientes dizem",
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
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <FeaturesBlocks lang={lang} />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

        <div className="pt-16 max-w-3xl lg:mx-auto mx-2 text-center pb-12 md:pb-16">
          <h2 className="h2 mb-4">{testimonials[lang]}</h2>
          <p className="text-xl text-gray-600">{testimonialsContent[lang]}</p>
        </div>
        
        <div className="lg:grid lg:grid-cols-3 max-w-6xl mx-auto">
          <Image
            className="mx-auto h-12 mt-16"
            src={Moneris}
            alt=""
            width={200}
            height={20}
          />
          <div className="mx-auto max-w-2xl col-span-2">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 lg:flex items-center justify-center text-base text-center  lg:space-x-3 lg:text-left">
                  <div className="font-semibold text-gray-900">
                    Carlos Oliveira
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="hidden lg:block fill-gray-900"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">
                    Chairman & Owner of Moneris
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
