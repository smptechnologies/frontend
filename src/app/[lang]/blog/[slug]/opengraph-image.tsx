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
  
  const post = await fetch(
    `https://staging.d2mrbwf0tk01vu.amplifyapp.com/api/posts/ai-journey`
  ).then((res) => res.json());
  return new ImageResponse(<img src={post.data.thumbnail} alt={post.data.title}/>, {
    ...size,
  });
}
