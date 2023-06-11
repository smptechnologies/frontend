import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import matter from "gray-matter";

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
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
}

export async function generateStaticParams({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const posts = fs.readdirSync("src/posts");
  return posts.map((post) => ({
    slug: post.replace(".mdx", ""),
  }));
}

export default async function Home({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const slug_path = `src/posts/${slug}.mdx`;
  const fileContents = fs.readFileSync(slug_path, "utf8");

  // Use gray-matter to parse the post metadata section
  const { content } = matter(fileContents);
  const mdxSource = await compileMDX({ source: content });

  return (
    <div className="prose-xl prose-slate lg:mx-auto mx-6">
      {mdxSource.content}
    </div>
  );
}
