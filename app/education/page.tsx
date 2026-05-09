import type { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { Education } from "@/components/Education/Education";
import { CertificationsContent } from "@/components/Certifications/CertificationsContent";

export const metadata: Metadata = {
  title: "Education | Adarsh Lakhanpal",
  description: "B.Tech CSE from Amritsar Group of Colleges, CGPA 8.18.",
};

export default function EducationPage() {
  return (
    <PageWrapper breadcrumb="Education">
      <section className="py-12">
        <Education />
      </section>
      <CertificationsContent />
    </PageWrapper>
  );
}
