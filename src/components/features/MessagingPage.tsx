import { MessagingChannels } from "@/components/messaging/MessagingChannels";
import { MessagingCompare } from "@/components/messaging/MessagingCompare";
import { MessagingCta } from "@/components/messaging/MessagingCta";
import { MessagingHero } from "@/components/messaging/MessagingHero";
import { MessagingMore } from "@/components/messaging/MessagingMore";
import { MessagingPress } from "@/components/messaging/MessagingPress";
import { MessagingRoles } from "@/components/messaging/MessagingRoles";
import { MessagingSecurity } from "@/components/messaging/MessagingSecurity";
import { MessagingSetup } from "@/components/messaging/MessagingSetup";

export function MessagingPage() {
  return (
    <>
      <MessagingHero />
      <MessagingPress />
      <MessagingMore />
      <MessagingRoles />
      <MessagingCompare />
      <MessagingChannels />
      <MessagingSecurity />
      <MessagingSetup />
      <MessagingCta />
    </>
  );
}
