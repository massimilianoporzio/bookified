/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import React from "react";


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

const Page = () => {
  return (
    <section className="flex justify-center items-center min-h-[60vh] w-full bg-[var(--bg-primary)] py-10">
      <div className="flex flex-row gap-10 bg-[var(--bg-secondary)] rounded-3xl shadow-soft-lg px-12 py-10 w-full max-w-6xl items-center">
        {/* Left: Heading, description, button */}
        <div className="flex-1 flex flex-col items-start justify-center min-w-[220px] max-w-[320px]">
          <h1 className="font-serif text-4xl font-bold text-[var(--text-primary)] mb-3">Your Library</h1>
          <p className="text-base text-[var(--text-secondary)] mb-6">
            Convert your books into interactive AI conversations. Listen, learn, and discuss your favorite reads.
          </p>
          <Button size="lg" className="text-base px-6 py-2 rounded-lg shadow-soft font-semibold">
            + Add new book
          </Button>
        </div>

        {/* Center: Illustration */}
        <div className="flex-1 flex justify-center items-center min-w-[220px] max-w-[340px]">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage books and globe"
            width={320}
            height={220}
            className="object-contain drop-shadow-xl select-none"
            priority
          />
        </div>

        {/* Right: Steps card */}
        <div className="flex-1 flex justify-center items-center min-w-[220px] max-w-[280px]">
          <div className="bg-white rounded-2xl shadow-soft-md px-7 py-7 flex flex-col gap-5 w-full max-w-[260px] border border-[var(--border-subtle)]">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-warm)] font-bold text-lg border border-[var(--border-subtle)] mr-2 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] leading-tight">{step.title}</div>
                  <div className="text-sm text-[var(--text-secondary)] leading-tight">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
