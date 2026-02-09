import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import Authority from "@/components/Authority";
import GuideContents from "@/components/GuideContents";
import ForWhom from "@/components/ForWhom";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Identification />
      <Authority />
      <GuideContents />
      <ForWhom />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Index;
