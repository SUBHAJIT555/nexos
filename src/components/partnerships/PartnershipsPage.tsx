import { PartnershipsForm } from "@/components/partnerships/PartnershipsForm";
import { PartnershipsHero } from "@/components/partnerships/PartnershipsHero";
import { PartnershipsHow } from "@/components/partnerships/PartnershipsHow";
import { PartnershipsPrograms } from "@/components/partnerships/PartnershipsPrograms";
import { PartnershipsWhy } from "@/components/partnerships/PartnershipsWhy";

export function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <PartnershipsPrograms />
      <PartnershipsHow />
      <PartnershipsWhy />
      <PartnershipsForm />
    </>
  );
}
