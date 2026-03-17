/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import Image from "next/image";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Upload PDF",
    desc: "Add your book file",
  },
  {
    title: "AI Processing",
    desc: "We analyze the content",
  },
  {
    title: "Voice Chat",
    desc: "Discuss with AI",
  },
];

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center min-h-[60vh] w-full bg-[var(--bg-primary)] py-6 px-2 mt-10 md:mt-0">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-[var(--bg-secondary)] rounded-3xl shadow-soft-lg px-2 md:px-12 py-6 md:py-10 w-full max-w-6xl items-center">
        {/* Mobile layout: description, button, illustration, steps */}
        <div className="w-full flex flex-col items-center md:items-start md:flex-1 md:max-w-[320px] md:min-w-55">
          <h1 className="font-serif text-4xl font-bold text-[var(--text-primary)] mb-3 md:text-left text-center w-full md:w-auto">
            Your Library
          </h1>
          <p className="text-base text-[var(--text-secondary)] mb-6 md:text-left text-center w-full md:w-auto">
            Convert your books into interactive AI conversations. Listen, learn,
            and discuss your favorite reads.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Button
              size="lg"
              className="min-w-[8rem] w-32 sm:w-40 md:w-72 text-base px-6 py-2 rounded-lg shadow-soft font-semibold mb-6 md:mb-0 bg-[var(--blue)] hover:bg-[var(--accent-warm-hover)] text-white"
            >
              + Add new book
            </Button>
          </div>
        </div>

        {/* Illustration: show on mobile above steps, on desktop in center */}
        <div className="w-full flex justify-center md:hidden mb-4">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage books and globe"
            width={220}
            height={140}
            className="object-contain drop-shadow-xl select-none"
            priority
          />
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center min-w-55 max-w-85">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage books and globe"
            width={320}
            height={220}
            className="object-contain drop-shadow-xl select-none"
            priority
          />
        </div>

        {/* Steps card: full width on mobile, right on desktop */}
        <div className="w-full flex justify-center md:flex-1 md:items-center md:justify-center md:min-w-60 md:max-w-96">
          <div className="bg-white rounded-2xl shadow-soft-md px-6 py-6 md:px-7 md:py-7 flex flex-col gap-5 w-full max-w-[380px] md:max-w-[320px] border border-[var(--border-subtle)]">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-warm)] font-bold text-lg border-2 border-[var(--border-subtle)] mr-2 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] leading-tight whitespace-nowrap">
                    {step.title}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] leading-tight whitespace-nowrap">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
