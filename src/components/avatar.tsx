"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Avatar({
  author,
  authorLink,
  date,
  image,
}: {
  author: string;
  authorLink: string;
  date: string;
  image: string;
}) {
  return (
    <div id="post-metadata" className="p-6 rounded-md border-b">
      <div className="flex flex-row justify-between text-xl pt-2">
        <Link
          href={authorLink}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-5"
        >
          <Image
            className="-mt-4 rounded-full shadow-xl"
            src={image}
            alt="Avatar"
            height={60}
            width={60}
          />
          <p className="text-blue-600">{author}</p>
        </Link>
        <p className=" text-gray-400">{date}</p>
      </div>
    </div>
  );
}

export default Avatar;
