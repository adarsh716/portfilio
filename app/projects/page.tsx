import type { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { Projects } from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects | Adarsh Lakhanpal",
  description: "Full-stack projects including KNOWLEDGE AI, ImmiFlow, Patty Kulcha, Space Cart, and The Wild Oasis.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper breadcrumb="Work">
      <Projects />
    </PageWrapper>
  );
}
