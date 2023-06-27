import { Locale } from "../../../../i18n-config";

import BlogLanding from "../../../components/blogLanding";
import BlogList from "../../../components/blogPostList";

export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const moreToCome: { [index: string]: string } = {
    en: "More to come",
    pt: "Mais em breve",
  };

  const comingSoon: { [index: string]: string } = {
    en: "Coming Soon",
    pt: "Em breve",
  };


  return (
    <div>
      <BlogLanding lang={lang} />
      <BlogList lang={lang} />

      <h1 className="text-center text-gray-600 pt-20">{comingSoon[lang]}</h1>
      <div className="h-[20rem] bg-gradient-to-t from-gray-200 to-white"></div>
    </div>
  );
}
