import Avatar from "@/components/avatar";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export default async function BlogLayout({
  children,
  params: { lang, slug },
}: {
  children: React.ReactNode;
  params: { lang: string; slug: string };
}) {
  try {
    const post = fs.readFileSync(`src/posts/${slug}.mdx`);
    const { data } = matter(post);

    return (
      <div>
        <div className="pt-32 max-w-3xl lg:mx-auto">
          <div className="lg:mx-0 mx-6">
            <h1 className="h1">{data.title}</h1>
            <h2 className="pt-3 pb-6 text-2xl text-gray-400">
              {data.subtitle}
            </h2>
          </div>

          <Avatar
            author={data.author}
            authorLink={data.authorLink}
            date={data.date}
            image={data.image}
          ></Avatar>

          <div className="pt-10">{children}</div>
        </div>
        <div className="h-[10rem] bg-gradient-to-t from-gray-200 to-white"></div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
