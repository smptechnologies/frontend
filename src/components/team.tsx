"use client";

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ArrowRight, ArrowLeft, Linkedin, Email } from "./svg";
import Image, { StaticImageData } from "next/image";

import Diogo from "../images/team-photos/diogo.jpg";
import Vasco from "../images/team-photos/vasco.jpeg";
import Hugo from "../images/team-photos/hugo.jpg";

function Team({ lang }: { lang: string }) {
  const meetTheTeam: { [index: string]: string } = {
    en: "Meet the team",
    pt: "Conhece a equipa",
  };

  const meetTheTeamSmallDescription: { [index: string]: string } = {
    en: "The professionals who are going to be working with you side by side.",
    pt: "Os profissionais que vão trabalhar consigo lado a lado.",
  };

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
      <div className="flex flex-row justify-center lg:justify-start mx-6">
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
            <a href={mail} target="_blank" rel="noopener noreferrer">
              <Email />
            </a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-auto ml-10">
                {open ? <ArrowLeft /> : <ArrowRight />}
              </Disclosure.Button>
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
                  <p className="lg:text-lg text-md  max-w-md mx-6 text-gray-600 min-w-full">
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

  return (
    <section id="team" className="bg-gradient-to-t from-gray-200 to-white">
      <div className="pb-20 mx-6 lg:mx-24 ">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:max-w-lg lg:mx-auto">
            <h1 className="h1 pt-32 pb-10 ">{meetTheTeam[lang]}</h1>
            <p className="text-xl pb-16 text-gray-600">
              {meetTheTeamSmallDescription[lang]}
            </p>
          </div>
          <div className="flex gap-12 flex-col justify-start lg:mt-20 lg:mb-10">
            <Member
              name="Hugo Pitorro"
              title="Partner"
              mail="mailto:hugo.pitorro@smptech.pt"
              linkedIn="https://www.linkedin.com/in/hugo-henrique-pitorro/"
              Photo={Hugo}
              Description="Hugo started his academic campaign in Computer Science at Instituto Superior Técnico, followed by a Master's degree at the Technical University of Munich which developed his interest in Machine Learning, with a particular emphasis on Natural Language Processing. He also spent his time as a Research Assistant at TUM, where he designed and authored publications within the Sebis Research Chair. Currently, he is contributing his technical acumen and research insight to the AI projects at SMP."
            ></Member>
            <Member
              name="Diogo Soares"
              title="Partner"
              mail="mailto:diogo.soares@smptech.pt"
              linkedIn="https://www.linkedin.com/in/diogo-sousa-soares/"
              Photo={Diogo}
              Description="Diogo's academic journey in Computer Science at Instituto Superior Técnico and Technical University of Munich emphasized Machine Learning and Quantum Computing. His industry experience includes roles as a Software Engineer at Amazon Web Services (AWS), and a Machine Learning Engineer in a startup environment. Additionally, his time as a Visiting Researcher at Carnegie Mellon University expanded his research prowess. Diogo is excited to leverage his multifaceted experience in upcoming professional endeavors."
            ></Member>
            <Member
              name="Vasco Moura"
              title="Partner"
              mail="mailto:vasco.moura@smptech.pt"
              linkedIn="https://www.linkedin.com/in/vascodmoura/"
              Photo={Vasco}
              Description="Vasco's academic background includes Business Administration and International Finance from Nova School of Business and Economics, and International Management from Nova SBE and Bocconi University. His practical experience is equally diverse, featuring strategic and finance roles at OC&C Strategy Consultants, Oliver Wyman, and Oxy Capital. Today, Vasco applies his management skills to drive the development of innovative AI solutions at SMP Technologies."
            ></Member>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
