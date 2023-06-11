import React from "react";

function BlogLanding({ lang }: { lang: string }) {
  const blog: { [index: string]: string } = {
    en: "Blog.",
    pt: "Blog.",
  };

  const blogSubtitle: { [index: string]: string } = {
    en: "Where we keep our readers up to date on the latest AI news",
    pt: "Onde mantemos os nossos leitores atualizados sobre o mundo de AI",
  };

  return (
    <div
      className="lg:h-[40rem] h-[20rem] lg:pt-40 pt-20 bg-right bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546177461-3283e4aa3b0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb')",
      }}
    >
      <div className="mx-6 lg:mx-auto max-w-5xl">
        <h1 className="pt-12 h1">{blog[lang]}</h1>
        <h2 className="pt-6 text-xl text-gray-600 max-w-md">
          {blogSubtitle[lang]}
        </h2>
      </div>
    </div>
  );
}

export default BlogLanding;
