"use client";
import { GlowingEffect } from "./glowing";
import { FileText, Terminal, Rocket, Brain, Code2, Activity } from "lucide-react";

export default function BentoGrid() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-12 xl:grid-rows-2 gap-4">
      <BentoItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<FileText className="h-5 w-5 text-black dark:text-neutral-400" />}
        title="Rich Documentation"
        description="Every component is documented with examples and props."
      />
      <BentoItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Terminal className="h-5 w-5 text-black dark:text-neutral-400" />}
        title="Developer Friendly"
        description="Built with Tailwind, React, and best practices in mind."
      />
      <BentoItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Rocket className="h-5 w-5 text-black dark:text-neutral-400" />}
        title="Fast Performance"
        description="Optimized for speed and responsiveness across all devices."
      />
      <BentoItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Brain className="h-5 w-5 text-black dark:text-neutral-400" />}
        title="Smart UI Patterns"
        description="Inspired by modern UX principles and intuitive interactions."
      />
      <BentoItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Code2 className="h-5 w-5 text-black dark:text-neutral-400" />}
        title="Clean Codebase"
        description="Readable, extensible code to customize your UI easily."
      />
    </ul>
  );
}

const BentoItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-xl font-semibold text-black md:text-2xl dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-black md:text-base dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
