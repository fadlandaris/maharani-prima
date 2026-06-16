"use client"

import type { Dictionary } from "@/lib/getDictionary";
import { globalStyles } from "@/styles/styles";
import Button from "../reusable/Button";

const Hero = ({ dict }: { dict: Dictionary }) => {
  return (
    <section className={`${globalStyles.fullContainer} h-screen bg-neutral-400`}>
      <div className={`${globalStyles.innerContainer} h-full pb-16 flex flex-col justify-end`}>
        <div className="grid grid-cols-2 items-end">
          <h1 className="text-background text-6xl font-semibold tracking-tighter">{dict.hero.title}</h1>
          <div className="flex justify-end">
            <div className="space-y-4 w-[70%]">
              <p className="text-background text-xl font-medium">{dict.hero.description}</p>
              <Button value={dict.hero.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
