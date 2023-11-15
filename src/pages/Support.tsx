import { Helmet } from "react-helmet";
import Contact from "@/components/Contact";

const SupportPage = () => {
  return (
    <>
      <Helmet>
        <title>Support Page - Solid SaaS Boilerplate</title>
        <meta name="description" content="This is Support page for Solid Pro" />
      </Helmet>
      <div className="pb-20 pt-40">
        <Contact />
      </div>
    </>
  );
};

export default SupportPage;
