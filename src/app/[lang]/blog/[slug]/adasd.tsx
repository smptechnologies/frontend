import { ImageResponse } from "next/server";
import { headers } from "next/headers";
import { request } from "http";
export const runtime = "edge";

export const alt = "Thumbnail";
export const size = {
  width: 1200,
  height: 627,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const host = headers().get("host");

  const post = await fetch(`http://${host}/api/posts/${params.slug}`).then((res) =>
    res.json()
  );
  return new ImageResponse(
    <img src={post.data.thumbnail} alt={post.data.title} />,
    {
      ...size,
    }
  );
}
