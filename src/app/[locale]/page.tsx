import DeferredParticlesBackground from "@/components/DeferredParticlesBackground";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <DeferredParticlesBackground />
      <Hero />
      <Experience />
      <FeaturedProjects />
    </div>
  );
}
