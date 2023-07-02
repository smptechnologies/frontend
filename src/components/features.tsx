"use client";

import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

import Training from "../images/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg";
import Coding from "../images/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg";
import Meeting from "../images/pexels-cottonbro-studio-7438102.jpg";

export default function Features({ lang }: { lang: string }) {
  const [tab, setTab] = useState(1);

  const ourServices: { [index: string]: string } = {
    en: "Our services",
    pt: "Os nossos serviços",
  };

  const serviceDescription: { [index: string]: string } = {
    en: "At SMP Technologies we offer end-to-end IT consulting services, focusing on enhancing your business processes with AI-powered solutions. We're committed to boosting your efficiency and productivity by providing expert guidance on strategy, implementation, and ongoing operations. Let us unlock your business's full potential with cutting-edge technology and tailored support.",
    pt: "Na SMP Technologies, oferecemos serviços abrangentes de consultoria em IT, focados em melhorar os seus processos de negócio com soluções potenciadas por AI. Comprometemo-nos a aumentar a sua eficiência e produtividade, fornecendo orientação especializada em estratégia, implementação e operações contínuas. Deixe-nos desbloquear todo o potencial do seu negócio com tecnologia de ponta e suporte personalizado.",
  };

  const servicesTitle: { [index: string]: string } = {
    en: "Improve your organization AI skills",
    pt: "Melhore as competências de AI na sua organização",
  };

  const smallGenericDescription: { [index: string]: string } = {
    en: "A comprehensive variety of services are provided that encompass workforce training, strategic consulting, and technical integration of cutting-edge technologies.",
    pt: "Oferecemos uma ampla variedade de serviços que abrangem formação de recursos humanos, consultoria estratégica e integração técnica das mais recentes tecnologias.",
  };

  const trainingEmployees: { [index: string]: string } = {
    en: "Training your employees",
    pt: "Formação dos seus colaboradores",
  };

  const trainingEmployeesContent: { [index: string]: string } = {
    en: "Tailored presentations and interactive tasks to increase your employees AI know-how.",
    pt: "Apresentações personalizadas e tarefas interativas para aumentar o conhecimento de IA dos seus colaboradores.",
  };

  const businessConsulting: { [index: string]: string } = {
    en: "Business Consulting",
    pt: "Consultoria Empresarial",
  };

  const businessConsultingContent: { [index: string]: string } = {
    en: "We go over your business processes and identify what can be optimized with AI.",
    pt: "Analisamos os seus processos de negócio e identificamos o que pode ser otimizado com IA.",
  };

  const individualSolutions: { [index: string]: string } = {
    en: "Individual IT solutions",
    pt: "Soluções de IT individuais",
  };

  const individualSolutionsContent: { [index: string]: string } = {
    en: "IT solutions that leverage AI to achieve your business requirements.",
    pt: "Soluções de IT que aproveitam a IA para atender às necessidades do seu negócio.",
  };

  return (
    <section id="features" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="max-w-6xl lg:h-[70rem] h-[123rem] mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl lg:mx-auto mx-2 lg:text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{ourServices[lang]}</h1>
            <p className="text-xl text-gray-600">{serviceDescription[lang]}</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">{servicesTitle[lang]}</h3>
                <p className="text-xl text-gray-600">
                  {smallGenericDescription[lang]}
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {/* 1st feature */}
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:border-gray-600 hover:bg-gray-100 hover:shadow-lg"
                      : "bg-gray-300 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      {trainingEmployees[lang]}
                    </div>
                    <div className="text-gray-600">
                      {trainingEmployeesContent[lang]}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-book"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                  </div>
                </a>
                {/* 2nd feature */}
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:border-gray-600 hover:bg-gray-100 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      {businessConsulting[lang]}
                    </div>
                    <div className="text-gray-600">
                      {businessConsultingContent[lang]}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-graph-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                      />
                    </svg>
                  </div>
                </a>

                {/* 3rd feature */}
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:border-gray-600 hover:bg-gray-100  hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      {individualSolutions[lang]}
                    </div>
                    <div className="text-gray-600">
                      {individualSolutionsContent[lang]}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-code-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 ">
              <div className="relative flex flex-col text-right my-7 lg:pb-16">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col drop-shadow-lg">
                    <Image
                      className="w-[25rem] h-[40rem] mx-auto rounded"
                      src={Training}
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col drop-shadow-lg">
                    <Image
                      className=" w-[25rem] h-[40rem] mx-auto rounded"
                      src={Meeting}
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col drop-shadow-lg">
                    <Image
                      className="w-[25rem] h-[40rem] mx-auto rounded "
                      src={Coding}
                      alt="Features bg"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
