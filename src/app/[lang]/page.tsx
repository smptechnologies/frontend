import HeroHome from "@/components/home";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/featureBlocks";

import { i18n } from "../../../i18n-config";


export async function generateStaticParams() {
  return i18n.locales.map((l) => ({
    lang: l,
  }));
}

export default function IndexPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div>
      <HeroHome lang={lang} />
      <Features lang={lang} />
      <FeaturesBlocks lang={lang} />
    </div>
  );
}
