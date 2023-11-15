import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate
        </title>
        <meta name="description" content="This is Home for Solid Pro" />
      </Helmet>
      <main>
        <Hero />
        <Brands />
        <Feature />
        <About />
        <FeaturesTab />
        <FunFact />
        <Integration />
        <CTA />
        <FAQ />
        <Testimonial />
        <Pricing />
        <Contact />
        <Blog />
      </main>
    </>
  );
};

export default Home;
