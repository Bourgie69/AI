import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    NEXT_PUBLIC_HF_TOKEN : process.env.NEXT_PUBLIC_HF_TOKEN || "",
    HF_TOKEN : process.env.HF_TOKEN || ""

  }
};

export default nextConfig;
