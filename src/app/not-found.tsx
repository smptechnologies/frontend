import React from "react";
import Link from "next/link";

import Header from "@/components/header";

function NotFound() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header lang="en" />
      {/*  Page content */}
      <div className="absolute w-full h-screen flex items-center justify-center ">
        <div className="text-center my-auto ">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/en"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Go back home
            </Link>
            <Link
              href="mailto:hugo.pitorro@smptech.pt"
              className="text-sm font-semibold text-gray-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
