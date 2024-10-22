import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog | VeSel - The Relationship App for Long-Term Connections & Trust",
  description: "This is Blog page for AI Tool",
  // other metadata
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb pageTitle="Blog Grid" />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
}
