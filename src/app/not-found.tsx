import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section size="lg">
      <p className="type-caption text-muted-foreground">404</p>
      <h1 className="mt-3 type-h1">Page not found</h1>
      <p className="mt-4 max-w-xl type-body text-muted-foreground">
        This path is not implemented yet.
      </p>
      <div className="mt-8">
        <LinkButton href="/">Back home</LinkButton>
      </div>
    </Section>
  );
}
