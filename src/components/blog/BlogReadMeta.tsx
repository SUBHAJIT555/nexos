import { BookOpen } from "lucide-react";

export function BlogReadMeta({
  date,
  readTime,
}: {
  date: string;
  readTime: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <p className="text-xs leading-[18px] text-neutral-600">{date}</p>
      <span className="flex items-center gap-2">
        <BookOpen aria-hidden="true" className="size-4 fill-neutral-600 text-neutral-600" />
        <p className="text-xs leading-[18px] text-neutral-600">{readTime}</p>
      </span>
    </div>
  );
}
