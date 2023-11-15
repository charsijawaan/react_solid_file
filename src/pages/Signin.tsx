import { Helmet } from "react-helmet";
import Signin from "@/components/Auth/Signin";

const SigninPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page - Solid SaaS Boilerplate</title>
        <meta name="description" content="This is Login page for Startup Pro" />
      </Helmet>
      <Signin />
    </>
  );
};

export default SigninPage;
