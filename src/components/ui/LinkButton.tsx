import { Button, type ButtonProps } from "@/components/ui/Button";

type LinkButtonProps = Extract<ButtonProps, { href: string }>;

export function LinkButton(props: LinkButtonProps) {
  return <Button {...props} />;
}
