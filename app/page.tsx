import Hero from "@components/Hero.tsx";
import Services from "@components/Services.tsx";
import Portfolio from "@components/Portfolio.tsx";
import CTA from "@components/CTA.tsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
    </main>
  );
}
