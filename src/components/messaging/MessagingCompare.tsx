import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { messagingCompare } from "@/data/features/messaging";
import { cn } from "@/lib/utils";

export function MessagingCompare() {
  const rowCount = messagingCompare.rows.length + 2;

  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {messagingCompare.headingBefore}
          <br />
          {messagingCompare.headingAfter}
        </h2>
        <div
          className="relative mx-auto mt-10 grid w-full max-w-[1200px] grid-cols-3"
          style={{ gridTemplateRows: `repeat(${rowCount}, auto)`, rowGap: 4 }}
        >
          <div
            aria-hidden="true"
            className="relative z-[1] rounded-md"
            style={{
              gridColumn: "2 / 3",
              gridRow: `1 / ${rowCount + 1}`,
              background: "radial-gradient(225.29% 141.42% at 0% 1.04%, #8556FF 0%, #5F35FF 59.62%)",
            }}
          />
          <div className="px-2 py-5 text-xs font-medium text-neutral-600 md:px-6 md:text-base">
            {messagingCompare.struggles}
          </div>
          <div className="relative z-10 px-2 py-5 text-center text-xs font-semibold text-white md:px-6 md:text-base">
            {messagingCompare.left}
          </div>
          <div className="px-2 py-5 text-center text-xs font-medium text-neutral-600 md:px-6 md:text-base">
            {messagingCompare.right}
          </div>
          {messagingCompare.rows.map((row, index) => {
            const gridRow = index + 2;
            return (
              <div key={row.label} className="contents">
                {row.band ? (
                  <div
                    aria-hidden="true"
                    className="rounded-md bg-neutral-100"
                    style={{ gridColumn: "1 / -1", gridRow }}
                  />
                ) : null}
                <div
                  className="relative z-[2] flex items-center py-4 pr-4 pl-3 text-xs font-medium text-neutral-700 md:px-6 md:text-base"
                  style={{ gridColumn: 1, gridRow }}
                >
                  {row.label}
                </div>
                <div
                  className="relative z-10 flex items-center justify-center px-2 py-4 text-center text-xs font-semibold text-white md:px-6 md:text-base"
                  style={{ gridColumn: 2, gridRow }}
                >
                  {row.ours}
                </div>
                <div
                  className={cn(
                    "relative z-[2] flex items-center justify-center px-2 py-4 text-center text-xs text-neutral-600 md:px-6 md:text-base",
                  )}
                  style={{ gridColumn: 3, gridRow }}
                >
                  {row.others}
                </div>
              </div>
            );
          })}
          <div
            className="relative z-10 hidden items-center justify-center px-6 py-6 md:flex"
            style={{ gridColumn: 2, gridRow: rowCount }}
          >
            <Button
              href={messagingCompare.cta.href}
              variant="outline"
              className="border-white bg-white text-neutral-900 hover:bg-white/90"
            >
              {messagingCompare.cta.label}
            </Button>
          </div>
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Button href={messagingCompare.cta.href} variant="hero">
            {messagingCompare.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
