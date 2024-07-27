// components/ProfileSection.tsx
import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Brush as BehanceIcon } from '@mui/icons-material';
import { SiReact, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { gsap } from 'gsap';

const ProfileSection: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(".main-button", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, stagger: 0.2 });
    gsap.fromTo(".profile-image", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
    gsap.fromTo(".title-text", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(".subtitle-text", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
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
        py: { xs: 2, md: 0}, 
      }}
    >
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: 2, md: -2, lg:-10 }, // Decreased margin from top
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
        <Typography component="div" gutterBottom sx={{ color: '#5c06b3', fontSize: '24px' }} >
          Hey! Everyone. I am 👋
        </Typography>
        <Typography variant="h3" component="div" gutterBottom fontWeight="bold" className="title-text">
          Adarsh Lakhanpal
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom sx={{ color: '#9c9c9c' }} className="subtitle-text">
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
              fontSize: '16px', // Adjust font size
              borderWidth: '2px', // Adjust border width
              '&:hover': {
                borderColor: '#8d7e8f',
              },
            }}
          >
            Download CV
          </Button>
          <Button
            variant="outlined"
            className="main-button"
            sx={{
              color: '#5c06b3',
              borderColor: '#5c06b3',
              mr: 2,
              borderRadius: '24px', // Make the button rounded
              textTransform: 'none', // Disable uppercase transformation
              padding: '8px 24px', // Adjust padding for better appearance
              fontSize: '16px', // Adjust font size
              borderWidth: '2px', // Adjust border width
              '&:hover': {
                borderColor: '#8d7e8f',
              },
            }}
          >
            Get in Touch
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
          mt: { xs: 2, md: -2, lg:-10 }
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
    </Box>
  );
};

export default ProfileSection;
