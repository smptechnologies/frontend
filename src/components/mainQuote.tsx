"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Moneris from "@/images/cropped-Logo_Moneris.webp";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "./svg";

type mainQuoteProps = {
  className?: string;
  lang: string;
};

type Quote = {
  quote: string;
  author: string;
  position: string;
};

const MainQuote: FC<mainQuoteProps> = ({ className, lang }) => {
  const [index, setIndex] = useState(0);

  const quoteList: { [index: string]: Quote[] } = {
    en: [
      {
        quote:
          "A good introduction to Generative AI, with a focus on ChatGPT. By the end of the course, our team at Moneris had a firm grasp on a variety of ways ChatGPT can be used. We are now more empowered and keener to explore ChatGPT further!",
        author: "Rui Almeida",
        position: "CEO & Managing Partner at Moneris",
      },
      {
        quote:
          "Diogo and Hugo provided our team with a very interesting eye-opener on ChatGPT and all the opportunities that the use of large language models present to our business. Looking forward to including ChatGPT as a daily tool!",
        author: "Carlos Oliveira",
        position: "Chairman & Owner of Moneris",
      },
    ],

    pt: [
      {
        quote:
          "Uma boa introdução à IA Generativa, com foco no ChatGPT. No final do curso, a equipa Moneris tinha uma compreensão clara de diversas maneiras como o ChatGPT pode ser usado. Estamos agora mais capacitados e predispostos em explorar, ainda mais, o ChatGPT!",
        author: "Rui Almeida",
        position: "CEO & Managing Partner at Moneris",
      },

      {
        quote:
          "O Diogo e o Hugo proporcionaram à nossa equipa uma visão muito interessante sobre o ChatGPT e todas as oportunidades que o uso de modelos de linguagem apresentam para o nosso negócio. Ansiosos por incluir o ChatGPT como uma ferramenta diária!",
        author: "Carlos Oliveira",
        position: "Chairman & Owner of Moneris",
      },
    ],
  };

  return (
    <div
      className={cn(
        "grid lg:grid-cols-7 max-w-7xl mx-auto rounded-md py-16 lg:p-16 lg:pl-0",
        className
      )}
    >
      <div className="grid content-center lg:col-span-2">
        <Image
          className="mx-auto h-12 "
          src={Moneris}
          alt=""
          width={200}
          height={20}
        />
      </div>
      <div className="lg:mx-auto max-w-4xl lg:col-span-4 pt-16 lg:pt-0 mx-6">
        <figure className="">
          <blockquote className="font-semibold leading-8 text-gray-900 text-xl lg:text-2xl sm:leading-9">
            <p>{quoteList[lang][index].quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 lg:flex items-center text-base lg:space-x-3 lg:text-left">
              <div className="font-semibold text-gray-900">
                {quoteList[lang][index].author}
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
                {quoteList[lang][index].position}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <button
        className="mx-6 lg:pl-24 flex justify-center"
        onClick={() => {
          setIndex((index + 1) % quoteList[lang].length);
        }}
      >
        <div className="hidden md:grid content-center">
          <ArrowRight />
        </div>
        <div className="block md:hidden pt-12">
          <ArrowDown/>
        </div>
      </button>
    </div>
  );
};

export default MainQuote;
