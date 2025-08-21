import Hero from '@/components/Hero';
// Removed InteractiveStory (performance/clarity). Replaced by ProcessHighlights.
// import ProcessHighlights from '@/components/ProcessHighlights';
import TrendSpotlight from '@/components/TrendSpotlight';
import Collections from '@/components/Collections';
import MissionBanner from '@/components/MissionBanner';

/**
 * Home page for JDS Blue Opticals.
 *
 * Single-page application with 3D scroll-controlled glasses and all sections.
 */
export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      {/* Narrative flow: Hero → Trends → Collections → Mission */}
      <TrendSpotlight />
      <section id="collections">
        <Collections />
      </section>
      <MissionBanner />
      {/* <ProcessHighlights /> */}
    </>
  );
}
