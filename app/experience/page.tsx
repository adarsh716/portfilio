import type { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience | Adarsh Lakhanpal",
  description: "Work experience at Scriptbox as Full Stack Developer and Intern.",
};

export default function ExperiencePage() {
  return (
    <PageWrapper breadcrumb="Experience">
      <ExperienceSection />
    </PageWrapper>
  );
}
