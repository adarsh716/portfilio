// components/ProfileSection.tsx
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
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 64px)',
        px: { xs: 2, md: 30 },
        py: { xs: 2, md: 0 }, 
      }}
    >
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: 2, md: -2, lg: -10 },
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
        <Typography component="div" gutterBottom sx={{ color: '#5c06b3', fontSize: '30px' }} >
          Hey! Everyone. I am 👋
        </Typography>
        <Typography variant="h3" component="div" gutterBottom fontWeight="bold" className="title-text" sx={{ fontSize:{xs:'50px', md:'55px', lg:'57px'} }} ref={nameRef}>
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
              borderRadius: '24px', // Make the button rounded
              textTransform: 'none', // Disable uppercase transformation
              padding: '8px 24px', // Adjust padding for better appearance
              fontSize: '20px', // Adjust font size
              borderWidth: '2px', // Adjust border width
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.3s',
              fontWeight:'bold',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderColor: '#fff',
                boxShadow: '0 0 5px #5c06b3, 0 0 10px #5c06b3',
              },
              '&:hover .button-text': {
                animation: 'moveTextUp 0.3s forwards, moveTextDown 0.3s 0.3s forwards',
              },
              '& .button-text': {
                display: 'inline-block',
                transition: 'transform 0.3s',
              },
              '@keyframes moveTextUp': {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-100%)' },
              },
              '@keyframes moveTextDown': {
                '0%': { transform: 'translateY(100%)' },
                '100%': { transform: 'translateY(0)' },
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
              mr: 2,
              borderRadius: '24px', 
              textTransform: 'none', 
              padding: '8px 24px', 
              fontSize: '20px', 
              borderWidth: '2px', 
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.3s',
              fontWeight:'bold',
              boxShadow: '0 0 5px #5c06b3, 0 0 10px #5c06b3',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderColor: '#fff',
              },
              '&:hover .button-text': {
                animation: 'moveTextUp 0.3s forwards, moveTextDown 0.3s 0.3s forwards',
              },
              '& .button-text': {
                display: 'inline-block',
                transition: 'transform 0.3s',
              },
              '@keyframes moveTextUp': {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-100%)' },
              },
              '@keyframes moveTextDown': {
                '0%': { transform: 'translateY(100%)' },
                '100%': { transform: 'translateY(0)' },
              },
            }}
          >
            <span className="button-text">Get in Touch</span>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          borderRadius: '50%',
          overflow: 'hidden',
          bgcolor: '#000000',
          mx: { xs: 'auto', md: 0 },
          mt: { xs: 2, md: -2, lg: -10 },
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
        <Box
          sx={{
            position: 'absolute',
            top: '-20px',
            left: '10%',
            width: '40px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#61dafb',
          }}
        >
          <SiReact size={40} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '-20px',
            width: '40px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3178c6',
          }}
        >
          <SiTypescript size={40} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '80%',
            left: '-20px',
            width: '40px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e34f26',
          }}
        >
          <SiHtml5 size={40} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '80%',
            right: '-20px',
            width: '40px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1572b6',
          }}
        >
          <SiCss3 size={40} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-20px',
            width: '40px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#339933',
          }}
        >
          <SiNodedotjs size={40} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '-20px',
            right: '10%',
            width: '40px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#47a248',
          }}
        >
          <SiMongodb size={40} />
        </Box>
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

export default ProfileSection;
