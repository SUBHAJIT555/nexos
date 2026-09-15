import Image from "next/image";
import { blogAuthorSrc } from "@/assets/blog";
import type { BlogPost } from "@/types/blog";

export function BlogAuthor({ post }: { post: BlogPost }) {
  return (
    <section className="pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-8">
        <div className="flex flex-col md:flex-row lg:col-span-8 lg:col-start-3">
          <Image
            src={blogAuthorSrc(post.author.image)}
            alt={post.author.name}
            width={96}
            height={96}
            className="mb-6 size-24 shrink-0 rounded-full object-cover md:mr-6 md:mb-0"
          />
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-neutral-900">{post.author.name}</p>
            <p className="text-base leading-6 text-neutral-600">{post.author.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
