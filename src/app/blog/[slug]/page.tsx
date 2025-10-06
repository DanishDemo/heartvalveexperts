import React from "react";
import BreadCrumb from "@/component/BreadCrumb";
import RelatedBlog from "@/component/Blog/RelatedBlog";
import CardiacComparison from "@/component/Blog/CardiacComparison";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  image?: string;
}

async function getBlogData(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `https://hclient.in/heartvalveexperts/wp-json/custom-api/v1/blogs?slug=${slug}`,
      { cache: "no-store" } // always fresh data
    );

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return <div className="text-center py-10 text-red-600">Blog not found!</div>;
  }

  return (
    <>
      <BreadCrumb title={blog.title} subpage="true" image="/images/contact.png"/>
      <CardiacComparison blog={blog}/>
      <RelatedBlog />
    </>
  );
}
