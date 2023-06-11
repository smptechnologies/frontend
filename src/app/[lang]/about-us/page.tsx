import { Locale } from "../../../../i18n-config";
import Company from "@/components/company";
import Mission from "@/components/mission";
import Team from "@/components/team";

export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  return (
    <div>
      <Company lang={lang}/>
      <Mission lang={lang}/>
      <Team lang={lang}/>
    </div>
  );
}
