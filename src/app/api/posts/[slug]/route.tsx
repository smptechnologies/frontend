import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;

    const slug_path = `src/posts/${slug}.mdx`;
    const fileContents = fs.readFileSync(slug_path, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return NextResponse.json({ data: data, content: content });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
