import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function NordTrendIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-32 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M368 112c0-8.8 7.2-16 16-16l176 0c8.8 0 16 7.2 16 16l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-137.4L331.3 363.3c-6.2 6.2-16.4 6.2-22.6 0L192 246.6 27.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l176-176c6.2-6.2 16.4-6.2 22.6 0L320 329.4 521.4 128 384 128c-8.8 0-16-7.2-16-16z" />
    </svg>
  );
}

export function NordRotateIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M15.2 272C6.4 271.5-.4 264 0 255.2l.4-8C5.1 153.5 82.4 80 176.2 80l214.4 0L333.2 27.8c-6.5-5.9-7-16.1-1.1-22.6s16.1-7 22.6-1.1l88 80c3.3 3 5.2 7.3 5.2 11.8s-1.9 8.8-5.2 11.8l-88 80c-6.5 5.9-16.7 5.5-22.6-1.1s-5.5-16.7 1.1-22.6L390.6 112l-214.4 0c-76.7 0-140 60.2-143.8 136.8l-.4 8c-.4 8.8-8 15.6-16.8 15.2zm481.6-32c8.8 .4 15.6 8 15.2 16.8l-.4 8c-4.7 93.7-82 167.2-175.8 167.2l-214.4 0 57.4 52.2c6.5 5.9 7 16.1 1.1 22.6s-16.1 7-22.6 1.1l-88-80c-3.3-3-5.2-7.3-5.2-11.8s1.9-8.8 5.2-11.8l88-80c6.5-5.9 16.7-5.5 22.6 1.1s5.5 16.7-1.1 22.6L121.4 400l214.4 0c76.7 0 140-60.2 143.8-136.8l.4-8c.4-8.8 8-15.6 16.8-15.2z" />
    </svg>
  );
}

export function NordWalletIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M548.7 27.3L585.4 64l-45.3 0-15.5 0L384 64l-.3 0L96 64c-35.3 0-64 28.7-64 64l0 220.1 14.1-14.1L64 316.1 64 192c53 0 96-43 96-96l364.3 0 15.8 0 45.3 0-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-64-64c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zM128 96c0 35.3-28.7 64-64 64l0-32c0-17.7 14.3-32 32-32l32 0zM54.6 448l45.3 0s0 0 0 0L544 448c35.3 0 64-28.7 64-64l0-220.1-14.1 14.1L576 195.9 576 320s0 0 0 0c-53 0-96 43-96 96l-223.6 0-.4 0L54.6 416l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 448zM576 352s0 0 0 0l0 32c0 17.7-14.3 32-32 32l-32 0c0-35.3 28.7-64 64-64zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm160 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </svg>
  );
}

export function NordSearchIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM192 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192zm-64 32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128zm64 32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
    </svg>
  );
}

export function NordCircleOneIcon({ className }: IconProps) {
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

export function NordCircleTwoIcon({ className }: IconProps) {
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

export function NordCircleThreeIcon({ className }: IconProps) {
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

export function NordCircleFourIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM229.9 129.1c8.2 3.3 12.2 12.6 8.9 20.8L183.6 288 288 288l0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-128 0c-5.3 0-10.3-2.6-13.2-7s-3.6-10-1.6-14.9l64-160c3.3-8.2 12.6-12.2 20.8-8.9z" />
    </svg>
  );
}

export function NordCheckIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-96 -64 640 640"
      fill="currentColor"
      className={cn("size-4", className)}
      aria-hidden="true"
    >
      <path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z" />
    </svg>
  );
}

export const nordChallengeIcons = {
  trend: NordTrendIcon,
  rotate: NordRotateIcon,
  wallet: NordWalletIcon,
  search: NordSearchIcon,
} as const;

export const nordStepIcons = {
  one: NordCircleOneIcon,
  two: NordCircleTwoIcon,
  three: NordCircleThreeIcon,
  four: NordCircleFourIcon,
} as const;
