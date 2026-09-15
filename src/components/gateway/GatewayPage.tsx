import { GatewayHero } from "@/components/gateway/GatewayHero";
import { GatewayLogos } from "@/components/gateway/GatewayLogos";
import { GatewayUnified } from "@/components/gateway/GatewayUnified";
import { GatewayData } from "@/components/gateway/GatewayData";
import { GatewayPain } from "@/components/gateway/GatewayPain";
import { GatewayWhy } from "@/components/gateway/GatewayWhy";
import { GatewayQuotes } from "@/components/gateway/GatewayQuotes";
import { GatewaySecurity } from "@/components/gateway/GatewaySecurity";
import { GatewayCta } from "@/components/gateway/GatewayCta";
import { GatewayFaq } from "@/components/gateway/GatewayFaq";

export function GatewayPage() {
  return (
    <>
      <div data-chrome="dark">
        <GatewayHero />
        <GatewayLogos />
        <GatewayUnified />
      </div>
      <div data-chrome="light">
        <GatewayData />
      </div>
      <div data-chrome="dark">
        <GatewayPain />
      </div>
      <div data-chrome="light">
        <GatewayWhy />
        <GatewayQuotes />
        <GatewaySecurity />
      </div>
      <div data-chrome="dark">
        <GatewayCta />
      </div>
      <div data-chrome="light">
        <GatewayFaq />
      </div>
    </>
  );
}
