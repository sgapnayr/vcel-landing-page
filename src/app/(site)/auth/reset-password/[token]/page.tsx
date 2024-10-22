import React from "react";

import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ResetPassword from "@/components/Auth/ResetPassword";

export const metadata: Metadata = {
  title:
    "Reset Password | VCel - The Relationship App for Long-Term Connections & Trust",
  description: "This is Reset Password page for AI Tool",
  // other metadata
};

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  return (
    <>
      <Breadcrumb pageTitle="Reset Password" />
      <ResetPassword token={params.token!} />
    </>
  );
};

export default ResetPasswordPage;
