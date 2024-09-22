// pages/index.tsx
'use client';
// Importing required libraries and components
import React, { useEffect } from 'react';
import { Box,Divider } from '@mui/material';
import { gsap } from 'gsap';
import Navbar from './navbar/index';
import ProfileSection from './profile/index';
import CustomCursor from './cursor/index';
import HomeExperienceSection from './homeExp';
import AboutSection from './about';
import ProjectPage from './projects';
import Skills from './skills';
import CircularContactLayout from './contact-us';
import ContactForm from './contact-us';
import Timeline from './education';
import Footer from './footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Background animation
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
    <Box sx={{ minHeight: '100vh', bgcolor: '#0d101e', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <Box
        className="background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, rgba(92, 6, 179, 0.3) 25%, transparent 25%, transparent 50%, rgba(92, 6, 179, 0.3) 50%, rgba(92, 6, 179, 0.3) 75%, transparent 75%, transparent)',
          backgroundSize: '100px 100px',
          zIndex: -1,
        }}
      ></Box>
      <Navbar />
      <Box sx={{ mt: '100px' }}> {/* Adjust this value based on your navbar's height */}
  <ProfileSection />
</Box>
      <Divider sx={{ my: 4, borderColor: '#5d06b366',mt:{xs : 2, md :0, lg:-3 } }} />
      {/* <CustomCursor /> */}
      <HomeExperienceSection/>
      <Divider sx={{ my: 4, borderColor: '#5d06b366',mt:{xs : 2, md :0, lg:10 } }} />
      <AboutSection/> 
      <ProjectPage/>
      <Skills/>
      <Timeline/>
      <ContactForm/>
      <Footer/>
    </Box>
  );
};

export default HomePage;
