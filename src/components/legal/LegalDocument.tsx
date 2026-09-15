export function LegalDocument({ html }: { html: string }) {
  return (
    <div
      className="legal-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
