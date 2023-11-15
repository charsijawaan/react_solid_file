import { Outlet } from "react-router-dom";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import ToasterContext from "@/lib/ToastContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import { ThemeProvider } from "@/lib/ThemeProvider";

const RootLayout = () => {
  return (
    <>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
      >
        <ScrollToAnchor />
        <Lines />
        <Header />
        <ToasterContext />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
