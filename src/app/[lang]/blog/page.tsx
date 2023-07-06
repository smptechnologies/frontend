import { Locale } from "../../../../i18n-config";
import { i18n } from "../../../../i18n-config";
import fs from "fs";
import matter from "gray-matter";
import { Meta } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import Gradient from "@/images/pexels-codioful-(formerly-gradienta)-7135014.jpg";


export const metadata = {
  description: "Blog collection of AI insights by AI experts.",
};

export async function generateStaticParams() {
  return i18n.locales.map((l) => ({
    lang: l,
  }));
}

function PostPreview({ lang, post }: { lang: string; post: Meta }) {
  const readMore: { [index: string]: string } = {
    en: "Read More",
    pt: "Leia mais",
  };

  return (
    <div className="flex lg:h-92 py-10 lg:px-10 my-auto hover:bg-gray-200 hover:ring-1 hover:ring-gray-600 rounded-md">
      <div className="hidden lg:grid relative lg:w-1/3">
        <Image
          className="shadow-md rounded-md"
          src={post.thumbnail}
          alt={post.title}
          fill={true}
        />
      </div>
      <div className="flex flex-col mx-10 w-3/4 ">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <h2 className="text-gray-600">
          <span className="text-blue-600">{post.author}</span> {post.date}
        </h2>
        <h3 className="pt-4 pb-8 mr-6">{post.subtitle}</h3>

        <Link
          className="btn bg-gray-900 hover:bg-gray-800 text-white lg:w-2/6"
          href={`/${lang}/blog/${post.slug}`}
        >
          <span>{readMore[lang]}</span>
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
  );
}

export default function Blog({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const moreToCome: { [index: string]: string } = {
    en: "More to come",
    pt: "Mais em breve",
  };

  const postCollecton: { [index: string]: string } = {
    en: "The post collection",
    pt: "Os artigos",
  };

  const blog: { [index: string]: string } = {
    en: "Blog",
    pt: "Blog",
  };

  const blogSubtitle: { [index: string]: string } = {
    en: "Where we keep our readers up to date on the latest AI news",
    pt: "Onde mantemos os nossos leitores atualizados sobre o mundo de AI",
  };

  let blogPosts: Meta[] = [];

  try {
    const postPaths: string[] = fs
      .readdirSync("src/posts")
      .map((post) => `src/posts/${post}`);

    blogPosts = postPaths.map(
      (post) => matter(fs.readFileSync(post)).data as Meta
    );
  } catch (error) {}

  return (
    <div>
      {/* landing */}
      <div className="relative lg:h-[40rem] h-[30rem] lg:pt-40 pt-28 overflow-hidden">
        <Image
          className="opacity-30"
          src={Gradient}
          alt="background"
          fill={true}
        />
        <div className="relative mx-6 lg:mx-auto max-w-7xl ">
          <h1 className="pt-12 h1">{blog[lang]}</h1>
          <h2 className="pt-6 text-xl text-gray-600 max-w-md">
            {blogSubtitle[lang]}
          </h2>
        </div>
      </div>

      <div className="bg-gradient-to-t from-gray-200 to-white">
        <div className="max-w-7xl lg:mx-auto mx-6 pt-10">
          <h1 className="pt-10 pb-5 text-2xl border-b border-gray-600">
            {postCollecton[lang]}
          </h1>

          <ul className="divide-y py-10">
            {blogPosts.map((post, index) => (
              <li key={index}>
                <PostPreview lang={lang} post={post} />
              </li>
            ))}
          </ul>


          <p className="text-gray-600 text-center pb-16 border-t">
            {moreToCome[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}
