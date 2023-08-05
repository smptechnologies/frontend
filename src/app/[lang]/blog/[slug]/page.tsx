import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import { notFound } from "next/navigation";
import { i18n } from "../../../../../i18n-config";
import Image from "next/image";
import Link from "next/link";
import { Meta } from "@/components/types";

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  try {
    const fileContents = fs.readFileSync(`src/posts/${slug}.mdx`);
    const { frontmatter } = await compileMDX({
      source: fileContents,
      options: { parseFrontmatter: true },
    });

    const data: Meta = frontmatter as Meta;

    return {
      title: data.title,
      description: data.subtitle,
      openGraph: {
        title: data.title,
        description: data.subtitle,
        url: `https://smptech.pt/en/blog/${slug}`,
        siteName: "SMP Technologies",
        images: [
          {
            url: data.thumbnail,
            width: 1200,
            height: 627,
          },
        ],
        type: "website",
      },
    };
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  let params: { lang: string; slug: string }[] = [];

  try {
    const langs = i18n.locales;
    const slugs = fs
      .readdirSync("src/posts")
      .map((post) => post.replace(".mdx", ""));

    slugs.forEach((slug) => {
      langs.forEach((lang) => {
        params.push({ lang, slug });
      });
    });
  } catch (error) {}

  return params;
}

export default async function Home({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const slug_path = `src/posts/${slug}.mdx`;
  const fileContents = fs.readFileSync(slug_path, "utf8");

  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  const data: Meta = frontmatter as Meta;

  return (
    <div className="">
      <div id="meta" className="pt-32 pb-8 lg:pb-16 bg-gray-200">
        <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-6 ">
          <div className="flex flex-col justify-between max-w-lg text-lg lg:text-xl">
            <div>
              <h1 className="h3">{data.title}</h1>
              <h2 className="pt-5 pb-6 text-gray-400">{data.subtitle}</h2>
            </div>
            <div id="author" className="pt-8 border-t-2 border-black">
              <div className="flex flex-row justify-between lg:gap-6 ">
                <Link
                  href={data.authorLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex flex-row gap-5"
                >
                 
                  <p className="text-lg hover:text-blue-600">{data.author}</p>
                </Link>
                <p className="text-lg font-mono text-gray-400">{data.date}</p>
              </div>
            </div>
          </div>
          <Image
            className="pt-6 lg:pt-0 rounded-md"
            src={data.thumbnail}
            alt="thumbnail"
            height={300}
            width={600}
          />
        </div>
      </div>

      <div
        id="post"
        className="pt-10 pb-20 "
      >
        <div className="prose lg:prose-lg prose-slate lg:mx-auto mx-6 max-w-3xl ">
          {content}
        </div>
      </div>
    </div>
  );
}
