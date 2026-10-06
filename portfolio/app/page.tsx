import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Knowledge } from "@/components/sections/Knowledge";
import { Projects } from "@/components/sections/Projects";
import { Philosophy } from "@/components/sections/Philosophy";
import { CodeSection } from "@/components/sections/CodeSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <SiteShell footer={<Footer />}>
      <Hero /><About /><Knowledge /><Projects /><Philosophy /><CodeSection /><Contact />
    </SiteShell>
  );
}
