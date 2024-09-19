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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ml: { md: 5,lg:10 }, // Added right margin to the image
        }}
      >
        <Avatar
          src="/images/profile/profile1.jpg" // Replace with your image path
          alt="Profile"
          className="about-image"
          sx={{
            width: { xs: 200, md: 400 },
            height: { xs: 200, md: 400 },
            borderRadius: '50%',
            mb: { xs: 4, md: 0 },
            boxShadow: '0 0 10px #5c06b3',
            animation: 'glow 1.5s infinite alternate',
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          ml: { md: -5 }, 
        }}
      >
        <Box sx={{ mb: 2 ,textAlign: { xs: 'center', md: 'left' }}}>
          <Typography
            component="div"
            className="about-text"
            sx={{
              display: 'inline-block',
              px: 2,
              py: 1,
              borderRadius: '16px',
              bgcolor: 'rgba(93, 6, 179, 0.41)',
              color: '#962dff',
              fontSize: '16px',
              fontWeight: 'bold',
              
            }}
          >
            About Me
          </Typography>
        </Box>
        <Typography variant="h4" component="div" fontWeight="bold" className="about-text" sx={{mb: 2 ,textAlign: { xs: 'center', md: 'left' }}}>
  Adarsh Lakhanpal
</Typography>
<Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  👋 Hi, I’m Adarsh Lakhanpal, but you can call me Adarsh. Nice to meet you!
</Typography>
<Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  🌐 Over 6 months of experience developing and programming interfaces with JavaScript, React JS, and Typescript. Developing websites for the last 2 years using the MERN stack (MongoDB, Express.js, React, Node.js).
</Typography>
<Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  🎓 Pursuing Engineering in Computer Science from Amritsar Group of Colleges.
</Typography>
<Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  🚀 Always striving to be a little better than yesterday.
</Typography>
<Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  📈 Passionate about building scalable web applications and exploring the latest technologies in web development.
</Typography>
{/* <Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  🔍 Keen on learning and adapting to new challenges, with a strong focus on enhancing user experience.
</Typography> */}
<Typography component="div" className="about-text" sx={{ mt: 2, fontSize: '16px', color: '#9c9c9c' }}>
  🌱 Committed to continuous learning and professional growth in the field of web development.
</Typography>

      </Box>
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #5c06b3, 0 0 10px #5c06b3, 0 0 15px #5c06b3, 0 0 20px #5c06b3, 0 0 25px #5c06b3;
          }
          100% {
            box-shadow: 0 0 25px #5c06b3, 0 0 25px #5c06b3, 0 0 30px #5c06b3, 0 0 85px #5c06b3, 0 0 100px #5c06b3;
          }
        }
      `}</style>
    </Box>
  );
};

export default AboutSection;
