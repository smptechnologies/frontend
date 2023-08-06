import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { Briefcase, Gear, Lightning } from "@/components/svg";
import { Check } from "@/components/svg";
import Cover from "@/images/workshop.jpeg";

export const metadata = {
  description:
    "How we provide your professionals with expert Generative AI training.",
};

type Feature = {
  call: string;
  popular: boolean;
  popularContent: string;
  title: string;
  included: string;
  subtitle: string;
  features: string[];
};

type Lecturer = {
  name: string;
  title: { [index: string]: string };
  image: string;
};

function FeatureCard(f: Feature) {
  return (
    <div className="max-w-lg mx-auto rounded-lg ring-1 ring-gray-200 hover:bg-gray-100  hover:ring-gray-600 m-2">
      <div className="mx-12 my-6">
        <div className="flex flex-row justify-between text-blue-600 ">
          <h3 className="font-bold pt-2">{f.call}</h3>
          <h3
            className={`${
              f.popular ? "" : "hidden"
            } text-sm bg-blue-200 rounded-xl p-2`}
          >
            {f.popularContent}
          </h3>
        </div>
        <h3 className="pt-10 text-2xl font-bold tracking-tight text-gray-900">
          {f.title}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">{f.subtitle}</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
            {f.included}
          </h4>
        </div>
        <ul
          role="list"
          className="mt-8 pb-16 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 "
        >
          {f.features.map((feature, index) => (
            <li key={index} className="flex gap-x-3">
              <Check />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function Training({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const featureCards: { [index: string]: Feature[] } = {
    en: [
      {
        call: "Standard",
        popular: true,
        popularContent: "Most Popular",
        title: "Get to know AI",
        subtitle:
          "An introduction to the technology and the possibilities its opportunities. Explore how to use AI in your everyday life at work and optimize your productivity.",
        included: "What's included",
        features: [
          "Introduction to ChatGPT",
          "How to use it",
          "Limitations",
          "Use Cases",
          "Plugins & Code Interpreter",
        ],
      },
      {
        call: "Custom",
        popular: false,
        popularContent: "Most Popular",
        title: "AI in your organization",
        subtitle:
          "A more in-depth look at the technology. We go over use cases specific to your industry and discuss automating business processes.",
        included: "What's included",
        features: [
          "Introduction to ChatGPT",
          "How to use it",
          "Limitations",
          "Use Cases",
          "Plugins & Code Interpreter",
          "Advanced Use Cases",
          "Incorporate AI in your organization",
        ],
      },
    ],
    pt: [
      {
        call: "Normal",
        popular: true,
        popularContent: "Mais popular",
        title: "Conhece AI",
        subtitle:
          "Uma introdução à tecnologia e às suas oportunidades. Explore como usar AI no seu dia-a-dia empresarial e otimizar a sua produtividade.",
        included: "O que está incluído",
        features: [
          "Introdução ao ChatGPT",
          "Como usar",
          "Limitações",
          "Use Cases",
          "Plugins & Code Interpreter",
        ],
      },
      {
        call: "Personalizado",
        popular: false,
        popularContent: "Mais Popular",
        title: "AI na sua organização",
        subtitle:
          "Uma abordagem mais profunda à tecnologia. Exploramos Use Cases específicos à sua indústria e discutimos como automatizar processos de negócio.",
        included: "O que está incluído",
        features: [
          "Introdução ao ChatGPT",
          "Como usar",
          "Limitações",
          "Use Cases",
          "Plugins & Code Interpreter",
          "Use cases avançados",
          "Incorporar IA na sua organização",
        ],
      },
    ],
  };

  const lecturers: Lecturer[] = [
    {
      name: "Diogo Soares",
      title: { en: "Partner", pt: "Partner" },
      image: "/images/team-photos/diogo.jpg",
    },
    {
      name: "Hugo Pitorro",
      title: { en: "Partner", pt: "Partner" },
      image: "/images/team-photos/hugo.jpg",
    },
    {
      name: "Vasco Moura",
      title: { en: "Partner", pt: "Partner" },
      image: "/images/team-photos/vasco.jpeg",
    },
    {
      name: "Sebastião Assunção",
      title: { en: "Lecturer", pt: "Formador" },
      image: "/images/team-photos/sebastiao.jpeg",
    },
  ];

  const hero: { [index: string]: string[] } = {
    en: [
      "Boost your productivity",
      "How we provide your professionals with expert AI training.",
    ],
    pt: [
      "Aumenta a tua produtividade",
      "Capacite os profissionais com formações especializadas de AI.",
    ],
  };

  const moveFaster: { [index: string]: string[] } = {
    en: [
      "Move faster",
      "How we help",
      "AI technology is moving fast, don't lose track and sign up for workshops with our AI trained professionals.",
      "Up-to-date.",
      "Connect your workforce with the latest developments in Generative AI, powered by specialized training from experts.",
      "Automation.",
      "Apply current technology to your organizations problems. Optimize your business processes and automate tedious manual labour.",
      "Growth.",
      "Discover new business directions enabled by the latest AI technologies.",
    ],
    pt: [
      "Sê ágil",
      "Como podemos ajudar",
      "A tecnologia AI está a evoluir muito rápido, continue na fronteira da inovação e inscreva-se nos nossos workshops com profissionais treinados em AI.",
      "Mantenha-se atualizado",
      "Ligue a sua força de trabalho aos novos desenvolvimentos em Generative AI através de formações especializadas feitas pelos nossos profissionais.",
      "Automatização",
      "Aplique as novas tecnologias aos problemas das sua organização. Optimize os seus processos de negócio e automatize trabalho manual tedioso.",
      "Crescimento",
      "Descubra novas oportunidades para crescer o seu negócio, potenciado pelas últimas tecnologias AI.",
    ],
  };

  const options: { [index: string]: string[] } = {
    en: ["Our options", "What you can expect from our training."],
    pt: ["As nossas opções", "O que pode esperar das nossas formações."],
  };

  const personnel: { [index: string]: string[] } = {
    en: [
      "Meet the lecturers",
      "We choose our personnel based on the leading AI knowledge we expect from our company.",
    ],
    pt: [
      "Os nossos formadores",
      "Escolhemos os nossos colaboradores com base com base no padrão elevado de conhecimento em AI que exigimos da nossa empresa.",
    ],
  };

  const interested: { [index: string]: string[] } = {
    en: ["Interested?", "Reach out via our contact form", "Contact Us"],
    pt: ["Interessado?", "Contacte-nos através do form", "Contacte-nos"],
  };

  return (
    <div className="">
      <div id="landing" className=" h-screen bg-slate-300">
        <div className="mx-6 lg:mx-auto max-w-7xl flex flex-col justify-center text-center h-full ">
          <h1 className="h1">{hero[lang][0]}</h1>
          <h2 className="pt-6 text-xl text-gray-600">{hero[lang][1]}</h2>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 ">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">
                  {moveFaster[lang][0]}
                </h2>
                <p className="mt-2 h2 text-gray-900 sm:text-4xl">
                  {moveFaster[lang][1]}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {moveFaster[lang][2]}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-[0.35rem] h-5 w-5 text-blue-600">
                        <Lightning />
                      </div>
                      {moveFaster[lang][3]}
                    </dt>
                    <dd className="inline ml-2">{moveFaster[lang][4]}</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-[0.35rem] h-5 w-5 text-blue-600">
                        <Gear />
                      </div>
                      {moveFaster[lang][5]}
                    </dt>
                    <dd className="inline ml-2">{moveFaster[lang][6]}</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-[0.35rem] h-5 w-5 text-blue-600">
                        <Briefcase />
                      </div>
                      {moveFaster[lang][7]}
                    </dt>
                    <dd className="inline ml-2">{moveFaster[lang][8]}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <Image
              src={Cover}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </div>

      <div id="features" className="">
        <div className="flex flex-col justify-center text-center ">
          <h1 className="h2 text-gray-900 sm:text-4xl">{options[lang][0]}</h1>
          <h2 className="pt-2 text-lg leading-8 text-gray-600">
            {options[lang][1]}
          </h2>
        </div>

        <div className="pt-12 max-w-7xl lg:mx-auto mx-6 grid lg:grid-cols-2">
          {featureCards[lang].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div id="lecturers" className="bg-white py-32 lg:py-64">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="h2 text-gray-900 sm:text-4xl">
              {personnel[lang][0]}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {personnel[lang][1]}
            </p>
          </div>
          <ul
            role="list"
            className="grid ml-10 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {lecturers.map((lecturer, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={lecturer.image}
                    alt=""
                    width={256}
                    height={256}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {lecturer.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-blue-600">
                      {lecturer.title[lang]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*TODO whenever we have cool stats*/}
      <div id="stats"></div>

      <div
        id="contact"
        className="max-w-7xl lg:mx-auto mx-6 grid lg:grid-cols-2 rounded-lg bg-slate-300 mb-20"
      >
        <div>
          <Image
            className="lg:rounded-bl-lg rounded-tl-lg rounded-tr-lg lg:rounded-tr-none"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42"
            alt="training"
            width={640}
            height={133}
          />
        </div>
        <div className="flex flex-col text-center justify-center py-10 lg:py-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {interested[lang][0]}
          </h1>
          <h2 className="text-lg leading-8 text-gray-600">
            {interested[lang][1]}
          </h2>
          <div className="flex gap-4 justify-center py-10 px-7">
            <Link
              href={`/${lang}/contact`}
              className="flex btn-sm rounded-md text-lg text-gray-200 bg-gray-900 hover:bg-gray-800 shadow-lg"
            >
              <span>{interested[lang][2]}</span>
              <svg
                className="w-3 h-3 fill-current flex-shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
