import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign in | VeeSell - The Relationship App for Long-Term Connections & Trust",
  description: "This is Sign in page for AI Tool",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Sign in" />

      <Signin />
    </>
  );
};

export default SigninPage;
