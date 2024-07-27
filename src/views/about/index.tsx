// components/AboutSection.tsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { gsap } from 'gsap';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(
        ".about-image",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
        px: { xs: 2, md: 10 },
        py: { xs: 5, md: 10 },
        bgcolor: '#0d101e',
        color: '#fff',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Avatar
        src="/images/profile/profile2.jpg" // Replace with your image path
        alt="Profile"
        className="about-image"
        sx={{
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: '50%',
          mb: { xs: 4, md: 0 },
          boxShadow: '0 0 10px #5c06b3',
          animation: 'glow 1.5s infinite alternate',
        }}
      />
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            component="div"
            className="about-text"
            sx={{
              display: 'inline-block',
              px: 2,
              py: 1,
              borderRadius: '16px',
              bgcolor: '#5c06b3',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            About Me
          </Typography>
        </Box>
        <Typography variant="h4" component="div" fontWeight="bold" className="about-text">
          Adarsh Lakhanpal
        </Typography>
        <Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
          👋 Hi, I’m Washington Henrique Fernandes de Sousa, but you can call me Henrique. Nice to meet you!
        </Typography>
        <Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
          🔐 Over 2 years of experience developing and programming interfaces with JavaScript, React JS, and Typescript.
        </Typography>
        <Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
          🎓 Graduated in Systems Analysis and Development from Fatec São José dos Campos.
        </Typography>
        <Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
          💡 Interested in Front-end development with React, React Native, VueJS, and UI/UX Design.
        </Typography>
        <Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
          🚀 Always striving to be a little better than yesterday.
        </Typography>
      </Box>
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #5c06b3, 0 0 10px #5c06b3, 0 0 15px #5c06b3, 0 0 20px #5c06b3, 0 0 25px #5c06b3;
          }
          100% {
            box-shadow: 0 0 25px #5c06b3, 0 0 25px #5c06b3, 0 0 30px #5c06b3, 0 0 35px #5c06b3, 0 0 40px #5c06b3;
          }
        }
      `}</style>
    </Box>
  );
};

export default AboutSection;
