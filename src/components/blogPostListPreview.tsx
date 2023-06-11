import React from "react";
import Image from "next/image";
import { Meta } from "./types";
import Link from "next/link";

function BlogPostListPreview({ lang, post }: { lang: string; post: Meta }) {
  const readMore: { [index: string]: string } = {
    en: "Read More",
    pt: "Leia mais",
  };

  return (
    <div className="grid grid-cols-4 py-10 my-5 hover:bg-gray-200 md:pl-20">
      <div className="md:col-span-1">
        <Image
          className="shadow-md rounded-md"
          src={post.thumbnail}
          alt={post.title}
          height={200}
          width={100}
        />
      </div>
      <div className="col-span-3 pl-10">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <h2 className="text-gray-600">
          <span className="text-blue-600">{post.author}</span> {post.date}
        </h2>
        <h3 className="pt-4 pb-8 mr-6">{post.subtitle}</h3>

        <Link
          className="btn bg-gray-900 text-white"
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

export default BlogPostListPreview;
