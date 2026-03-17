/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */

import HeroSection from "@/components/HeroSection";
import { sampleBooks } from "@/lib/constants";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="library-hero-grid">
        {sampleBooks.map((book) => (
          <div
            key={book._id}
            className="library-hero-grid-item"
            style={{ backgroundColor: book.coverColor }}
          >
            <img src={book.coverURL} alt={book.title} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
