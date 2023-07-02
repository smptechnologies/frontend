import { ImageResponse } from "next/server";
import fs from "fs";
import matter from "gray-matter";
export const runtime = "edge";

export const alt = "Thumbnail";
export const size = {
  width: 1200,
  height: 627,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const slug_path = `src/posts/${params.slug}.mdx`;
    const fileContents = fs.readFileSync(slug_path, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    return new ImageResponse(
      (
        <div>
          <img src={data.thumbnail}></img>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Thumbnail
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
