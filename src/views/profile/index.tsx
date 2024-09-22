import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Brush as BehanceIcon } from '@mui/icons-material';
import { SiReact, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { gsap } from 'gsap';

const ProfileSection: React.FC = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(".main-button", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, stagger: 0.2 });
    gsap.fromTo(".profile-image", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
    gsap.fromTo(".title-text", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(".subtitle-text", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });

    const text = "Adarsh Lakhanpal";
    let index = 0;
    let isDeleting = false;

    const type = () => {
      if (nameRef.current) {
        if (isDeleting) {
          nameRef.current.textContent = text.slice(0, index) + '|';
          index--;
          if (index < 0) {
            isDeleting = false;
            index = 0;
            setTimeout(type, 500); // Pause before typing again
          } else {
            setTimeout(type, 100);
          }
        } else {
          nameRef.current.textContent = text.slice(0, index) + '|';
          index++;
          if (index > text.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
          } else {
            setTimeout(type, 100);
          }
        }
      }
    };

    type();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' }, // Stack column-reverse for mobile
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: { xs: '70dvh', md: "100dvh" },
        px: { xs: 2, md: 30 }, // Adjust padding for different screens
        py: { xs: 2, md: 0 },
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: 5, md: 0 }, // Reduce margin on small screens
          maxWidth: { xs: '100%', md: '50%' },
          paddingBottom: { xs: 4, md: 0 }, // Add padding for bottom space on smaller screens
        }}
      >
        <Typography component="div" gutterBottom sx={{ color: '#5c06b3', fontSize: '30px' }} >
          Hey! Everyone. I am 👋
        </Typography>
        <Typography variant="h3" component="div" gutterBottom fontWeight="bold" className="title-text" sx={{ fontSize:{xs:'45px', md:'55px', lg:'57px'} }} ref={nameRef}>
          {/* Name will be typed here */}
        </Typography>
        <Typography component="div" gutterBottom sx={{ color: '#9c9c9c', fontSize: '20px' }} className="subtitle-text">
          Full Stack Developer
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1, mb: 2 }}>
          <IconButton sx={{ color: '#8d7e8f' }} href="https://linkedin.com">
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: '#8d7e8f' }} href="https://github.com">
            <GitHubIcon />
          </IconButton>
          <IconButton sx={{ color: '#8d7e8f' }} href="https://behance.net">
            <BehanceIcon />
          </IconButton>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            className="main-button"
            sx={{
              color: '#5c06b3',
              borderColor: '#0d101e',
              mr: 2,
              borderRadius: '24px',
              textTransform: 'none',
              padding: '8px 24px',
              fontSize: '20px',
              borderWidth: '2px',
              transition: 'all 0.3s',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderColor: '#fff',
                boxShadow: '0 0 5px #5c06b3, 0 0 10px #5c06b3',
              },
            }}
          >
            <span className="button-text">Download CV</span>
          </Button>
          <Button
            variant="outlined"
            className="main-button"
            sx={{
              color: '#5c06b3',
              borderColor: '#5c06b3',
              borderRadius: '24px',
              textTransform: 'none',
              padding: '8px 24px',
              fontSize: '20px',
              borderWidth: '2px',
              transition: 'all 0.3s',
              fontWeight: 'bold',
              boxShadow: '0 0 5px #5c06b3, 0 0 10px #5c06b3',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderColor: '#fff',
              },
            }}
          >
            <span className="button-text">Get in Touch</span>
          </Button>
        </Box>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: 250, md: 350, lg: 400 }, // Adjust image size for different screens
          height: { xs: 250, md: 350, lg: 400 },
          borderRadius: '50%',
          overflow: 'hidden',
          mx: { xs: 0, md: 0 },
          mt: { xs: 2, md: 0 },
          boxShadow: '0 0 10px #5c06b3',
          animation: 'glow 1.5s infinite alternate',
        }}
        className="profile-image"
      >
        <Image
          src="/images/profile/profile1.jpg"
          alt="Profile"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default ProfileSection;
