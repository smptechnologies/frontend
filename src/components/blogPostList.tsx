import { Meta } from "./types";
import BlogPostListPreview from "./blogPostListPreview";
import fs from "fs";
import matter from "gray-matter";

export default function BlogList({ lang }: { lang: string }) {
  const postCollecton: { [index: string]: string } = {
    en: "The post collection",
    pt: "Os artigos",
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
    <div className="max-w-5xl lg:mx-auto mx-6 pt-10">
      <h1 className="pt-10 pb-5 text-2xl border-b">{postCollecton[lang]}</h1>

      <ul className="divide-y">
        {blogPosts.map((post, index) => (
          <li key={index}>
            <BlogPostListPreview lang={lang} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
