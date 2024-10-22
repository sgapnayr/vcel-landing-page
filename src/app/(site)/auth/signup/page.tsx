import Signup from "@/components/Auth/Signup";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sing up | VeSel - The Relationship App for Long-Term Connections & Trust",
  description: "This is Sign up for AI Tool",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Sign up" />

      <Signup />
    </>
  );
};

export default SignupPage;
