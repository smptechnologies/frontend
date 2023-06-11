"use client";

import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";

function Contact({ params: { lang } }: { params: { lang: string } }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [org, setOrganization] = useState<string>("");
  const [request, setRequest] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const welcomeMessage: { [index: string]: string } = {
    en: "Welcome. We'll reply as soon as possible.",
    pt: "Bem-vindo. Vamos responder assim que for possível.",
  };

  const nameEntry: { [index: string]: string } = {
    en: "Name",
    pt: "Nome",
  };

  const nameEntryContent: { [index: string]: string } = {
    en: "Enter your name",
    pt: "Insira o seu nome",
  };

  const emailEntryContent: { [index: string]: string } = {
    en: "Enter your email address",
    pt: "Insira o seu email",
  };

  const phoneEntry: { [index: string]: string } = {
    en: "Phone",
    pt: "Telemóvel",
  };

  const phoneEntryContent: { [index: string]: string } = {
    en: "Enter your phone number",
    pt: "Insira o seu número de Telemóvel",
  };

  const organizationEntry: { [index: string]: string } = {
    en: "Organization",
    pt: "Organização",
  };

  const organizationEntryContent: { [index: string]: string } = {
    en: "Enter your organization's name",
    pt: "Insira o nome da sua organização",
  };

  const requestMessageEntry: { [index: string]: string } = {
    en: "Request Message",
    pt: "Mensagem",
  };

  const requestMessageEntryContent: { [index: string]: string } = {
    en: "Enter your request message",
    pt: "Insira a sua mensagem",
  };

  const submitEntry: { [index: string]: string } = {
    en: "Submit",
    pt: "Enviar",
  };

  const submitSuccessTitle: { [index: string]: string } = {
    en: "Contact sucessful",
    pt: "Contacto recebido",
  };

  const submitSuccessSubtitle: { [index: string]: string } = {
    en: "You can safely return to the home page.",
    pt: "Pode voltar à página inicial com segurança.",
  };

  const submitSuccessButton: { [index: string]: string } = {
    en: "Home",
    pt: "Início",
  };

  const isFormFilled = () => {
    return name && email && request;
  };

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      phone,
      organization: org,
      request,
    };

    try {
      const response = await fetch(
        "https://v36ff53svd.execute-api.eu-west-1.amazonaws.com/default/contact-mail-service",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        openModal();
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col  overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">{welcomeMessage[lang]}</h1>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all pb-10">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-medium leading-6 text-gray-900"
                      >
                        {submitSuccessTitle[lang]}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-lg text-gray-500">
                          {submitSuccessSubtitle[lang]}
                        </p>
                      </div>

                      <div className="flex justify-center mt-8">
                        <Link
                          href={`/${lang}`}
                          className="btn-sm rounded-md text-lg text-gray-200 bg-gray-900 hover:bg-gray-800 shadow-lg"
                        >
                          {submitSuccessButton[lang]}
                        </Link>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <form id="contact">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1">
                    {nameEntry[lang]} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800  border-gray-200 focus:border-gray-400 rounded-md"
                    placeholder={nameEntryContent[lang]}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800 border-gray-200 focus:border-gray-400 rounded-md"
                    placeholder={emailEntryContent[lang]}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1">
                    {phoneEntry[lang]}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input w-full text-gray-800  border-gray-200 focus:border-gray-400 rounded-md"
                    placeholder={phoneEntryContent[lang]}
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="company"
                  >
                    {organizationEntry[lang]}
                  </label>
                  <input
                    id="org"
                    type="text"
                    className="form-input w-full text-gray-800  border-gray-200 focus:border-gray-400 rounded-md"
                    placeholder={organizationEntryContent[lang]}
                    required
                    value={org}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4 min-h-[12rem]">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="request"
                  >
                    {requestMessageEntry[lang]}{" "}
                    <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    id="request"
                    className="w-full h-5/6 text-gray-800  border-gray-200 focus:border-gray-400 rounded-md"
                    placeholder={requestMessageEntryContent[lang]}
                    required
                    form="contact"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white disabled:bg-blue-400 bg-blue-600 hover:bg-blue-700 w-full"
                    disabled={!isFormFilled()}
                    onClick={handleSubmit}
                  >
                    {submitEntry[lang]}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
