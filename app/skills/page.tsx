import type { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { CertificationsContent } from "@/components/Certifications/CertificationsContent";

export const metadata: Metadata = {
  title: "Skills | Adarsh Lakhanpal",
  description: "Tech stack: Next.js, React, Node.js, Supabase, Firebase, Prisma, Material UI, Tailwind CSS.",
};

export default function SkillsPage() {
  return (
    <PageWrapper breadcrumb="Skills">
      <SkillsSection />
      <CertificationsContent />
    </PageWrapper>
  );
}
