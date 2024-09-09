import Contact from "./_components/Contact";
import FAQs from "./_components/FAQs";
import Hero from "./_components/Hero";
import HowWorks from "./_components/HowWorks";
import Why from "./_components/Why";

export default function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <HowWorks />
      <FAQs />
      <Contact />
    </div>
  );
}
