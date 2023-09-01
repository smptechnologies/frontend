import { Locale } from "../../../../i18n-config";
import { i18n } from "../../../../i18n-config";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { Meta } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import { Email } from "@/components/svg";

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
    <div className="flex py-10 my-4 lg:px-10 hover:bg-gray-100 ring-1 ring-gray-200 hover:ring-gray-600 rounded-md">
      <div className="hidden lg:grid relative lg:w-1/3">
        <Image
          className="shadow-md rounded-md object-none"
          src={post.thumbnail}
          alt={post.title}
          width={300}
          height={180}
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

export default async function Blog({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const blog: { [index: string]: string } = {
    en: "Blog",
    pt: "Blog",
  };

  const blogSubtitle: { [index: string]: string } = {
    en: "Covering the latest AI news, industry reports and updates about the company",
    pt: "A cobrir as últimas notícias de AI, relatórios sobre a indústria e notícias da empresa.",
  };

  const featured: { [index: string]: string[] } = {
    en: ["Want to be featured?", "Send us a message."],
    pt: ["Queres uma plataforma?", "Envia-nos uma mensagem."],
  };

  const contact: { [index: string]: string } = {
    en: "Contact Us",
    pt: "Contacte-nos",
  };

  let blogPosts: Meta[] = [];

  try {
    const postPaths: string[] = fs
      .readdirSync("src/posts")
      .map((post) => `src/posts/${post}`);
    const blogPostsPromises: Promise<Meta>[] = postPaths.map(
      async (postPath): Promise<Meta> => {
        const fileContents = fs.readFileSync(postPath, "utf8");

        const { frontmatter } = await compileMDX({
          source: fileContents,
          options: { parseFrontmatter: true },
        });

        return frontmatter as Meta;
      }
    );

    blogPosts = await Promise.all(blogPostsPromises);
  } catch (error) {}

  return (
    <div>
      <div className="relative h-screen overflow-hidden bg-slate-300">
        <div className="relative h-full mx-6 lg:mx-auto max-w-7xl flex flex-col justify-center text-center">
          <h1 className="h1">{blog[lang]}</h1>
          <div className="flex justify-center pt-6 text-xl ">
            <h2 className="text-gray-600 max-w-xl ">{blogSubtitle[lang]}</h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl lg:mx-auto mx-6 pt-10">
        <ul className=" py-10">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <PostPreview lang={lang} post={post} />
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-7xl lg:mx-auto mx-6 rounded-md h-72 bg-slate-300 my-10  ring-1 ring-gray-200">
        <div className="flex lg:flex-row flex-col justify-evenly lg:justify-between lg:mx-16 mx-6 h-full ">
          <div className="flex flex-col justify-center h3 text-center">
            <h3 className="text-2xl lg:text-3xl">{featured[lang][0]}</h3>
            <h3 className="text-2xl lg:text-3xl">{featured[lang][1]}</h3>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center gap-4">
              <Link
                href={`/${lang}/contact`}
                className="flex justify-center btn-sm rounded-md text-lg text-gray-200 bg-gray-900 hover:bg-gray-800 shadow-lg"
              >
                <span>{contact[lang]}</span>
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
              <Link
                className="bg-slate-100 hover:bg-gradient-to-br from-slate-200 to-white hover:text-gray-700 p-4 rounded-md ring-1 ring-gray-600 "
                href="mailto:info@smptech.pt"
              >
                <div className="">
                  <Email />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
