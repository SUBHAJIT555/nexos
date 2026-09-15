import { ModelsCta } from "@/components/models/ModelsCta";
import { ModelsDatabase } from "@/components/models/ModelsDatabase";
import { ModelsHero } from "@/components/models/ModelsHero";

export function ModelsPage() {
  return (
    <div className="bg-[#071013]">
      <ModelsHero />
      <ModelsDatabase />
      <ModelsCta />
    </div>
  );
}
