"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { COMPARISON_TABLE } from "@/lib/constants";

export function ComparisonTable() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="The Difference"
        title="How we compare"
        subtitle="A different model for nonprofit consulting."
      />

      <FadeIn>
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-sm text-slate-brand font-medium">
                  &nbsp;
                </th>
                <th className="text-left py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal" />
                    <span className="text-navy font-serif text-lg">SSL</span>
                  </div>
                </th>
                <th className="text-left py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-brand/30" />
                    <span className="text-slate-brand font-serif text-lg">
                      Legacy Firms
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((row, idx) => (
                <tr
                  key={row.category}
                  className={idx % 2 === 0 ? "bg-cloud/50" : "bg-transparent"}
                >
                  <td className="py-4 px-4 text-sm font-medium text-navy">
                    {row.category}
                  </td>
                  <td className="py-4 px-4 text-sm text-teal font-medium">
                    {row.ssl}
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-brand">
                    {row.legacy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
