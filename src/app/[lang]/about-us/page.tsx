import { Locale } from "../../../../i18n-config";
import Company from "@/components/company";
import Mission from "@/components/mission";
import Team from "@/components/team";
import { i18n } from "../../../../i18n-config";


export async function generateStaticParams() {
  return i18n.locales.map((l) => ({
    lang: l,
  }));
}


export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div>
      <Company lang={lang} />
      <Mission lang={lang} />
      <Team lang={lang} />
    </div>
  );
}
