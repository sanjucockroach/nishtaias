import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NISHTA IAS Academy",
    short_name: "NISHTA IAS",
    description: "Your UPSC dream deserves the right strategy.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e7",
    theme_color: "#071523",
    icons: [{ src: "/nishta-logo.png", sizes: "225x225", type: "image/png" }],
  };
}
