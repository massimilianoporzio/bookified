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
    <section className="flex justify-center items-center min-h-[60vh] w-full bg-(--bg-primary) py-6 px-2 mt-10 md:mt-0">
      <div className="library-hero-card w-full max-w-6xl">
        <div className="library-hero-content">
          {/* Testo e CTA */}
          <div className="library-hero-text">
            <h1 className="library-hero-title">Your Library</h1>
            <p className="library-hero-description">
              Convert your books into interactive AI conversations. Listen,
              learn, and discuss your favorite reads.
            </p>
            <div className="w-full flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="min-w-32 w-32 sm:w-40 lg:w-72 text-base px-6 py-2 rounded-lg font-semibold mb-6 lg:mb-0 bg-blue hover:bg-(--accent-warm-hover) text-white"
              >
                + Add new book
              </Button>
            </div>
          </div>

          {/* Illustrazione mobile */}
          <div className="library-hero-illustration">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and globe"
              width={220}
              height={140}
              className="object-contain drop-shadow-xl select-none"
              priority
            />
          </div>
          {/* Illustrazione desktop */}
          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and globe"
              width={320}
              height={220}
              className="object-contain drop-shadow-xl select-none"
              priority
            />
          </div>

          {/* Steps card */}
          <div className="library-steps-card w-full max-w-95 lg:max-w-[320px]">
            {steps.map((step, idx) => (
              <div key={step.title} className="library-step-item">
                <span className="library-step-number">{idx + 1}</span>
                <div>
                  <div className="library-step-title">{step.title}</div>
                  <div className="library-step-description">{step.desc}</div>
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
