import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ServiceCards from "@/components/ServiceCards";
import CaseStudyCards from "@/components/CaseStudyCards";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-16">
        <Container><ServiceCards /></Container>
      </section>
      <section className="py-16 border-t border-white/10">
        <Container><CaseStudyCards /></Container>
      </section>
      <section className="py-16">
        <Container><Testimonials /></Container>
      </section>
      <section className="py-16 border-t border-white/10">
        <Container><CTA /></Container>
      </section>
    </>
  );
}
