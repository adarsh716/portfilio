import type { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { ContactPageContent } from "@/components/Contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Adarsh Lakhanpal",
  description: "Get in touch with Adarsh Lakhanpal — available for freelance, full-time, and collaboration.",
};

export default function ContactPage() {
  return (
    <PageWrapper breadcrumb="Contact">
      <ContactPageContent />
    </PageWrapper>
  );
}
