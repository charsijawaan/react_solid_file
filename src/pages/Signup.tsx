import { Helmet } from "react-helmet";
import Signup from "@/components/Auth/Signup";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Sign Up Page - Solid SaaS Boilerplate</title>
        <meta
          name="description"
          content="This is Sign Up page for Startup Pro"
        />
      </Helmet>
      <Signup />
    </>
  );
}
