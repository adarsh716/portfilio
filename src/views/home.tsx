// pages/index.tsx
"use client";
// Importing required libraries and components
import React, { useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { gsap } from "gsap";
import Navbar from "./navbar/index";
import ProfileSection from "./profile/index";
import CustomCursor from "./cursor/index";
import HomeExperienceSection from "./homeExp";
import AboutSection from "./about";
import ProjectPage from "./projects";
import Skills from "./skills";
import CircularContactLayout from "./contact-us";
import ContactForm from "./contact-us";
import Timeline from "./education";
import Footer from "./footer";

const HomePage: React.FC = () => {
  useEffect(() => {
    const animateBackground = () => {
      gsap.to(".background", {
        y: "20%",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    };
    animateBackground();
  }, []);

  return (
    <>
      <Box sx={{ mt: "100px" }}>
        <ProfileSection />
      </Box>
      <Divider
        sx={{ my: 4, borderColor: "#5d06b366", mt: { xs: 2, md: 0, lg: -3 } }}
      />
      <HomeExperienceSection />
      <Divider
        sx={{ my: 4, borderColor: "#5d06b366", mt: { xs: 2, md: 0, lg: 10 } }}
      />
      <AboutSection />
      <ProjectPage />
      <Skills />
      <Timeline />
      <ContactForm />
    </>
  );
};

export default HomePage;
