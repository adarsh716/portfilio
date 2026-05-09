import type { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { AboutPageContent } from "@/components/About/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Adarsh Lakhanpal",
  description: "Full Stack Developer at Scriptbox — building real-world apps with Next.js, React, Supabase & Prisma.",
};

export default function AboutPage() {
  return (
    <PageWrapper breadcrumb="About">
      <AboutPageContent />
    </PageWrapper>
  );
}
