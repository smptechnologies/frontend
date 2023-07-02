import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { i18n } from "../../../../../i18n-config";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  try {
    const { data } = matter(fs.readFileSync(`src/posts/${slug}.mdx`));
    return {
      title: data.title,
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

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  const mdxSource = await compileMDX({ source: content });

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
                  <Image
                    className="-mt-3 rounded-full shadow-xl"
                    src={data.image}
                    alt="Avatar"
                    height={50}
                    width={50}
                  />
                  <p className="hover:text-gray-800">{data.author}</p>
                </Link>
                <p className="font-mono text-gray-400">{data.date}</p>
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
        className="pt-10 pb-20 bg-gradient-to-t from-gray-200 to-white "
      >
        <div className="prose lg:prose-lg prose-slate lg:mx-auto mx-6 max-w-3xl ">
          {mdxSource.content}
        </div>
      </div>
    </div>
  );
}
