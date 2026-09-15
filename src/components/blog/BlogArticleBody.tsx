export function BlogArticleBody({ html }: { html: string }) {
  return (
    <div
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
