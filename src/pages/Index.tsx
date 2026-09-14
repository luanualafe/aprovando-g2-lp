import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Sectors from "@/components/Sectors";
import Solution from "@/components/Solution";
import ApprovalProof from "@/components/ApprovalProof";
import PriceOffer from "@/components/PriceOffer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Sectors />
        <Solution />
        <ApprovalProof />
        <PriceOffer />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
