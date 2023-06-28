"use client";

import { Dialog } from "@headlessui/react";
import { useState, useEffect, ChangeEvent } from "react";
import { LogoWithoutText } from "./svg";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function Header({ lang }: { lang: string }) {
  const [top, setTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const home: { [index: string]: string } = {
    en: "Home",
    pt: "Início",
  };

  const team: { [index: string]: string } = {
    en: "Team",
    pt: "Equipa",
  };

  const contactUs: { [index: string]: string } = {
    en: "Contact Us",
    pt: "Contacte-nos",
  };

  const router = useRouter();
  const pathname = usePathname();

  function langSelector(e: ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = e.target.value;

    if (selectedLanguage !== lang) {
      let newPath: string;

      if (selectedLanguage === "en") {
        newPath = pathname.replace(/^\/pt/, "/en");
      } else {
        newPath = pathname.replace(/^\/en/, "/pt");
      }

      router.push(newPath);
    }
  }

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 bg-white transition duration-300 ease-in-out  ${
        (top && "border-b border-gray-200") ||
        (!top && "bg-white backdrop-blur-sm shadow-lg md:bg-opacity-90")
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-20 px-7">
          {/* Logo */}
          <LogoWithoutText />
          {/* hamburguer */}
          <div className="flex md:hidden">
            <button
              id="hamburguer"
              type="button"
              className={`${
                mobileMenuOpen ? "hidden" : ""
              } -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {/* home + team + blog*/}
          <div className="hidden md:flex flex-grow">
            <div className="flex flex-grow ml-3 gap-5 t flex-wrap items-center">
              <a href={`/${lang}`}>
                <span className="font-medium text-gray-600 hover:text-gray-900 pe-2 py-3 flex items-center transition duration-150 ease-in-out hover:">
                  {home[lang]}
                </span>
              </a>
              <Link href={`/${lang}/about-us`}>
                <span className="font-medium text-gray-600 hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                  {team[lang]}
                </span>
              </Link>
              <Link href={`/${lang}/blog`}>
                <span className="font-medium text-gray-600 hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                  Blog
                </span>
              </Link>
            </div>
          </div>
          {/* Lang + Sign in */}
          <div className="hidden md:flex justify-end">
            <div className="flex inset-y-0 right-0  items-center">
              <select
                id="language"
                name="language"
                className="h-full rounded-md border-1 border-gray-600 shadow-lg bg-transparent py-0 pl-2 pr-7 text-gray-600 hover:text-gray-900 sm:text-sm"
                value={lang}
                onChange={(e) => {
                  {
                    const selectedLanguage = e.target.value;

                    if (selectedLanguage !== lang) {
                      let newPath: string;

                      if (selectedLanguage === "en") {
                        newPath = pathname.replace(/^\/pt/, "/en");
                      } else {
                        newPath = pathname.replace(/^\/en/, "/pt");
                      }

                      router.push(newPath);
                    }
                  }
                }}
              >
                <option value="en">EN</option>
                <option value="pt">PT</option>
              </select>
            </div>

            <Link
              href={`/${lang}/contact`}
              className="btn-sm rounded-md text-white bg-gray-900 hover:bg-gray-800 ml-3 shadow-lg"
            >
              <span>{contactUs[lang]}</span>
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
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-5 pt-2 pb-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between px-7">
            <LogoWithoutText />
            <button
              id="cross"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6 px-8">
                <Link
                  href={`/${lang}`}
                  className="-mx-3 block rounded-lg px-3 py-4 text-xl font-medium leading-7 text-gray-600 hover:text-gray-900"
                >
                  {home[lang]}
                </Link>
                <Link
                  href={`/${lang}/about-us`}
                  className="-mx-3 block rounded-lg px-3 py-4 text-xl font-medium leading-7  text-gray-600 hover:text-gray-900"
                >
                  {team[lang]}
                </Link>
                <Link
                  href={`/${lang}/blog`}
                  className="pointer-events-none cursor-default -mx-3 block rounded-lg px-3 py-4 text-xl font-medium leading-7  text-gray-600 hover:text-gray-900"
                >
                  {/* TODO create language select popover*/}
                  Blog
                </Link>
              </div>

              <div>
                <select
                  id="language"
                  name="language"
                  className="h-full rounded-md border-1 border-gray-600 shadow-lg bg-transparent mt-6 mx-7 text-gray-600 hover:text-gray-900 sm:text-sm"
                  value={lang}
                  onChange={langSelector}
                >
                  <option value="en">EN</option>
                  <option value="pt">PT</option>
                </select>

                <div className="flex py-6 px-7">
                  <Link
                    href={`/${lang}/contact`}
                    className="flex btn-sm rounded-md text-xl text-gray-200 bg-gray-900 hover:bg-gray-800 shadow-lg"
                  >
                    <span>{contactUs[lang]}</span>
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
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
