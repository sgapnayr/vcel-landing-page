"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Support = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function postEmail(email: string, name: string) {
    const loading = toast.loading("Signing up...");
    try {
      const res = await axios.post(
        `${process.env.VCEL_BACKEND_URL}/api/email`,
        {
          email,
          name,
        },
      );

      toast.dismiss(loading);
      toast.success("Signed up successfully!");

      setEmail("");
      setName("");

      console.log("Response:", res.data);
    } catch (error) {
      console.log("Error:", error);
      toast.dismiss(loading);
      toast.error((error as Error).message);
      console.error("Error:", error);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postEmail(email, name);
  };

  return (
    <section id="support" className="scroll-mt-17">
      <div className="mx-auto max-w-[1104px] px-4 sm:px-8 xl:px-0">
        <div className="features-box-border relative z-999 overflow-hidden rounded-[30px] bg-dark px-4 pt-25 sm:px-20 lg:px-27.5">
          {/* Grid row */}
          <div className="absolute -top-[16%] left-1/2 -z-1 flex w-full max-w-[690px] -translate-x-1/2 justify-center gap-7.5 opacity-40">
            {/* Add pricing grid divs here */}
          </div>

          {/* Stars */}
          <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          {/* Background shapes */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <span className="absolute left-1/2 top-0 -z-1 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-19.svg)] bg-cover bg-center bg-no-repeat"></span>
            <span className="absolute left-1/2 top-0 -z-1 aspect-[1170/592] w-full -translate-x-1/2">
              <Image
                src="/images/blur/blur-20.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
            <span className="absolute left-1/2 top-0 -z-1 mx-auto aspect-[530/254] w-full max-w-[530px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-21.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
          </div>

          <SectionTitle
            subTitle="Stay Updated"
            title="Strengthen Your Relationship Today!"
            paragraph="Join our email list to receive the latest updates, features, and exclusive offers from VCel."
          />

          {/* Email sign-up form */}
          <div className="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="-mx-4 flex flex-wrap xl:-mx-10">
                <div className="w-full px-4 md:w-1/2 xl:px-5">
                  <div className="mb-9.5">
                    <label
                      htmlFor="name"
                      className="mb-2.5 block font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      required
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 xl:px-5">
                  <div className="mb-9.5">
                    <label
                      htmlFor="email"
                      className="mb-2.5 block font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
