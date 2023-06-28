import React from "react";
import Link from "next/link";
import { LogoWithText, Linkedin, Email } from "./svg";

function Footer({ lang }: { lang: string }) {

  const resources: { [index: string]: string } = {
    en: "Resources",
    pt: "Recursos",
  };

  const company: { [index: string]: string } = {
    en: "Company",
    pt: "Empresa",
  };

  const contacts: { [index: string]: string } = {
    en: "Contacts",
    pt: "Contactos",
  };

  const home: { [index: string]: string } = {
    en: "Home",
    pt: "Início",
  };

  const aboutUs: { [index: string]: string } = {
    en: "About Us",
    pt: "Sobre Nós",
  };

  const tutorials: { [index: string]: string } = {
    en: "Tutorials & Guides",
    pt: "Tutoriais e Guias",
  };

  return (
    <footer className="">
      <div className="grid lg:grid-cols-4 gap-10 mx-auto max-w-2xl py-10 ">
        <Link href={`/${lang}`} className="mx-auto">
          <LogoWithText />
        </Link>
        <div className="mx-auto w-32">
          <h1 className="text-gray-800 font-medium mb-4">{resources[lang]}</h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Link
              href={`/${lang}/blog`}
              className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="mx-auto w-32">
          <h1 className="text-gray-800 font-medium mb-4">{company[lang]}</h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Link
              href={`/${lang}`}
              className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <li>{home[lang]}</li>
            </Link>
            <Link
              href={`/${lang}/about-us`}
              className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <li>{aboutUs[lang]}</li>
            </Link>
          </ul>
        </div>
        <div className="mx-auto w-32">
          <h1 className="text-gray-800 font-medium mb-4">{contacts[lang]}</h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Link
              href={"mailto:info@smptech.pt"}
              className="flex flex-row gap-2 text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              info@smptech.pt
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
