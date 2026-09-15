import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function StoryArrowUpIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-128 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6 176 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-441.4L324.7 171.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-144-144z" />
    </svg>
  );
}

export function StoryUsersIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM269.7 336c80 0 145 64.3 146.3 144L32 480c1.2-79.7 66.2-144 146.3-144l91.4 0zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zm431 208c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320l-61.4 0c-4.4 0-8.8 .2-13.2 .5c11.3 9.4 21.6 19.9 30.7 31.5l43.9 0c71 0 128.6 57.2 129.3 128l-128 0c0 .8 0 1.5 0 2.3c0 10.8-2.8 20.9-7.6 29.7l136.9 0zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7c5.2 9.8 9.3 20.3 12.4 31.2C392.3 71.9 411.2 64 432 64c44.2 0 80 35.8 80 80s-35.8 80-80 80c-25.2 0-47.6-11.6-62.3-29.8c-4.7 10.3-10.4 19.9-17 28.9C373 243.4 401 256 432 256z" />
    </svg>
  );
}

export function StoryClockIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144c0 8.8 7.2 16 16 16l112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </svg>
  );
}

export function StoryEyeSlashIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM418 414.9c-23.5 22.9-51.8 43.3-85.4 59.4c-7.9 3.8-17.2 3.8-25.1 0C169.2 408.2 122.9 270.7 113.8 174.7L80.1 148.2c2.6 100.7 45.8 274.7 213.5 355c16.7 8 36.1 8 52.8 0c38.6-18.5 70.6-41.9 97-68.2l-25.4-20zM295 7.8L174 59.2l28.6 22.6L307.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6c-.2 45.8-9.6 108.6-37.1 169.6l25.8 20.4c32.5-68.7 43-139.7 43.3-189.8c.1-26.2-16.3-47.9-38.3-57.2L345 7.8c-16-6.8-34-6.8-50 0z" />
    </svg>
  );
}

export function StoryArrowDownIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-128 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M180.7 507.3c6.2 6.2 16.4 6.2 22.6 0l144-144c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 457.4 208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 441.4L59.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144z" />
    </svg>
  );
}

export function StoryBanIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M402.7 425.3l-316-316C52.6 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224c56.1 0 107.4-20.6 146.7-54.7zm22.6-22.6C459.4 363.4 480 312.1 480 256C480 132.3 379.7 32 256 32c-56.1 0-107.4 20.6-146.7 54.7l316 316zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </svg>
  );
}

export function StoryEyeOffIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -64 640 640"
      fill="currentColor"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z" />
    </svg>
  );
}

export function StoryCheckIcon({ className }: IconProps) {
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

export const payhawkTeamIcons = {
  arrowUp: StoryArrowUpIcon,
  users: StoryUsersIcon,
  clock: StoryClockIcon,
} as const;

export const payhawkLackIcons = {
  eyeSlash: StoryEyeSlashIcon,
  arrowDown: StoryArrowDownIcon,
  ban: StoryBanIcon,
  eyeOff: StoryEyeOffIcon,
} as const;
