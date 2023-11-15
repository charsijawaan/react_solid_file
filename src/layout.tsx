import { Outlet } from "react-router-dom";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import ToasterContext from "@/context/ToastContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <Lines />
      <Header />
      <ToasterContext />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
