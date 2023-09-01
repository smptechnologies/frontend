"use client";

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Linkedin,
  Email,
} from "./svg";
import Image, { StaticImageData } from "next/image";

import Diogo from "../images/team-photos/diogo.jpg";
import Vasco from "../images/team-photos/vasco.jpeg";
import Hugo from "../images/team-photos/hugo.jpg";

function Member({
  name,
  title,
  mail,
  linkedIn,
  Photo,
  Description,
}: {
  name: string;
  title: string;
  mail: string;
  linkedIn: string;
  Photo: StaticImageData;
  Description: string;
}) {
  return (
    <div className="lg:flex lg:flex-row justify-center lg:justify-start">
      <div className="flex flex-col">
        <Image
          className="md:max-w-none mx-auto rounded-full shadow-xl mt-6"
          src={Photo}
          width="200"
          height="300"
          alt={name}
        />
        <h1 className="text-xl pt-6 font-bold text-center mb-1">{name}</h1>
        <p className="text-gray-600 text-center">{title}</p>
        <div className="flex flex-row pt-4 gap-5 justify-center text-gray-600">
          <Link
            className="rounded-full bg-gray hover:text-gray-900"
            href={mail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </Link>
          <Link
            className="hover:text-gray-900"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex justify-center pt-10 pb-4 lg:pt-0">
              <Disclosure.Button className="">
                <div className="hidden lg:flex lg:my-auto lg:ml-10">
                  {open ? <ArrowLeft /> : <ArrowRight />}
                </div>
              </Disclosure.Button>
              <Disclosure.Button>
                <div className="lg:hidden mx-auto">
                  {open ? <ArrowUp /> : <ArrowDown />}
                </div>
              </Disclosure.Button>
            </div>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="lg:my-auto"
            >
              <Disclosure.Panel static>
                <p className="text-lg max-w-lg lg:mx-6 text-gray-600 min-w-full ">
                  {Description}
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default function Team({ lang }: { lang: string }) {
  const meetTheTeam: { [index: string]: string } = {
    en: "Meet the team",
    pt: "Conhece a equipa",
  };

  const meetTheTeamSmallDescription: { [index: string]: string } = {
    en: "The professionals who are going to be working with you side by side.",
    pt: "Os profissionais que vão trabalhar consigo lado a lado.",
  };

  const descriptionHugo: { [index: string]: string } = {
    en: "Hugo started his academic campaign in Computer Science at Instituto Superior Técnico, followed by a Master's degree at the Technical University of Munich which developed his interest in Artificial Intelligence. During his time at TUM, he worked as a Research Assistant in the Sebis Research Chair. Currently, he is contributing his technical acumen and research insight to the AI projects at SMP.",
    pt: "O Hugo começou a vida académica no Instituto Superior Técnico em Engenharia Informática, seguindo para o mestrado na Technical University of Munich na mesma área, fomentando o seu interesse em Inteligência Artificial. Durante o mestrado, trabalhou como Research Assistant na equipa da Sebis Research. Atualmente está a contribuir com as suas capacidades técnicas e conhecimento teórico para os projetos de AI na SMP.",
  };

  const descriptionDiogo: { [index: string]: string } = {
    en: "Diogo's academic journey in Computer Science at Instituto Superior Técnico and Technical University of Munich emphasized Machine Learning and Quantum Computing. His industry experience includes roles as a Software Engineer at Amazon Web Services (AWS), and a Machine Learning Engineer in a startup environment. Additionally, his time as a Visiting Researcher at Carnegie Mellon University expanded his research prowess. Diogo is excited to leverage his multifaceted experience in upcoming professional endeavors.",
    pt: "O Diogo estudou Engenharia Informática no Instituto Superior Técnico e na Technical University of Munich, onde obteve conhecimentos especializados nas áreas de Machine Learning e Computação Quântica. Na indústria, trabalhou como Software Engineer na Amazon Web Services (AWS) e como Machine Learning Engineer num ambiente de startup. Adicionalmente, esteve na Carnegie Mellon University como Investigador Visitante onde melhorou a sua aptidão para investigação. A ambição do Diogo é tomar partido da sua experiência de forma a aplicá-la da melhor forma nos projetos da SMP.",
  };

  const descriptionVasco: { [index: string]: string } = {
    en: "Vasco's academic background includes Business Administration and International Finance from Nova School of Business and Economics, and International Management from Nova SBE and Bocconi University. His practical experience is equally diverse, featuring strategic and finance roles at OC&C Strategy Consultants, Oliver Wyman, and Oxy Capital. Today, Vasco applies his management skills to drive the development of innovative AI solutions at SMP Technologies.",
    pt: "A formação académica do Vasco inclui Administração de Empresas e Finanças Internacionais pela Nova School of Business and Economics, e Gestão Internacional pela Nova SBE e Universidade Bocconi. A sua experiência profissional é igualmente diversa, apresentando posições estratégicas e financeiras na OC&C Strategy Consultants, Oliver Wyman e Oxy Capital. Hoje, o Vasco está a usufruir das suas competências em gestão para potenciar as soluções inovadoras de AI na SMP Technologies.",
  };

  return (
    <div className="lg:flex lg:flex-row pb-20 ">
      <div className="lg:max-w-md">
        <h1 className="h1 pt-32 pb-10 ">{meetTheTeam[lang]}</h1>
        <p className="text-xl pb-16 text-gray-600">
          {meetTheTeamSmallDescription[lang]}
        </p>
      </div>
      <div className="flex flex-col gap-12 justify-start lg:pl-20 lg:mt-20 ">
        <Member
          name="Diogo Soares"
          title="Partner"
          mail="mailto:diogo.soares@smptech.pt"
          linkedIn="https://www.linkedin.com/in/diogo-sousa-soares/"
          Photo={Diogo}
          Description={descriptionDiogo[lang]}
        ></Member>
        <Member
          name="Hugo Pitorro"
          title="Partner"
          mail="mailto:hugo.pitorro@smptech.pt"
          linkedIn="https://www.linkedin.com/in/hugo-henrique-pitorro/"
          Photo={Hugo}
          Description={descriptionHugo[lang]}
        ></Member>
        <Member
          name="Vasco Moura"
          title="Partner"
          mail="mailto:vasco.moura@smptech.pt"
          linkedIn="https://www.linkedin.com/in/vascodmoura/"
          Photo={Vasco}
          Description={descriptionVasco[lang]}
        ></Member>
      </div>
    </div>
  );
}
