import { Outlet } from "react-router-dom";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import ToasterContext from "@/context/ToastContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import ScrollToAnchor from "@/components/ScrollToAnchor";

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
