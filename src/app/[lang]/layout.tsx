import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SMP Technologies",
  description: "AI Services born in Lisbon",
  metadataBase: new URL("https://smptech.pt"),
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header lang={params.lang}></Header>
        {children}
        <Footer lang={params.lang}></Footer>
      </body>
    </html>
  );
}
