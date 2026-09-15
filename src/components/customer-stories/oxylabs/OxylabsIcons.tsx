import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function OxylabsCircleOneIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 130.2c4.9 2.9 8 8.1 8 13.8l0 208 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-180.4-32.1 18.3c-7.7 4.4-17.4 1.7-21.8-6s-1.7-17.4 6-21.8l56-32c5-2.8 11-2.8 16 .1z" />
    </svg>
  );
}

export function OxylabsCircleTwoIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM217 174.4c9.8-9.2 22.7-14.2 36.1-14c28.2 .4 50.9 23.4 50.9 51.6c0 13.7-5.4 26.8-15.1 36.5L180.7 356.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-105.4 0 80.9-80.9c15.7-15.7 24.5-37 24.5-59.1c0-45.7-36.7-83-82.4-83.6c-21.7-.3-42.7 7.8-58.5 22.7L181 164.3c-6.4 6.1-6.7 16.2-.7 22.6s16.2 6.7 22.6 .7L217 174.4z" />
    </svg>
  );
}

export function OxylabsCircleThreeIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l100.7 0-79.2 67.9c-5.1 4.4-6.9 11.5-4.6 17.7s8.4 10.4 15.1 10.4l63.5-.3c26.7-.1 48.4 21.5 48.4 48.2c0 26.6-21.6 48.2-48.2 48.2l-36 0c-17.5 0-34-8.2-44.5-22.2l-2.5-3.4c-5.3-7.1-15.3-8.5-22.4-3.2s-8.5 15.3-3.2 22.4l2.5 3.4c16.5 22.1 42.5 35 70.1 35l36 0c44.3 0 80.2-35.9 80.2-80.2c0-44.4-36.1-80.4-80.6-80.2l-19.9 .1 78.9-67.6c5.1-4.4 6.9-11.4 4.6-17.7s-8.3-10.4-15-10.4l-144 0z" />
    </svg>
  );
}

export const oxylabsChallengeIcons = {
  one: OxylabsCircleOneIcon,
  two: OxylabsCircleTwoIcon,
  three: OxylabsCircleThreeIcon,
} as const;
