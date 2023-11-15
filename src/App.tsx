import { Route, Routes } from "react-router-dom";
import RootLayout from "@/layout";
import Home from "@/pages/Home";
import Docs from "@/pages/Docs";
import Support from "@/pages/Support";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import Error from "@/pages/Error";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog-details" element={<BlogDetails />} />
          <Route path="/error" element={<Error />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
