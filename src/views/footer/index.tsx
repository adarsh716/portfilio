import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1f2e', // Adjust the background color to match the screenshot
        padding: '2rem',
        color: '#9CA3AF', // Lighter gray for text, similar to the image
      }}
    >
      {/* Social Media Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem', // Space between the icons
          marginBottom: '1rem', // Add margin to space between icons and text
        }}
      >
        {/* LinkedIn Icon */}
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener">
          <IconButton
            sx={{
              backgroundColor: '#373B53', // Icon background color
              color: '#fff', // Icon color
              '&:hover': {
                backgroundColor: '#50597B', // Hover effect
              },
              width: 48,
              height: 48,
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Link>

        {/* GitHub Icon */}
        <Link href="https://github.com" target="_blank" rel="noopener">
          <IconButton
            sx={{
              backgroundColor: '#373B53', // Icon background color
              color: '#fff', // Icon color
              '&:hover': {
                backgroundColor: '#50597B', // Hover effect
              },
              width: 48,
              height: 48,
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Link>

        {/* Facebook Icon */}
        <Link href="https://www.facebook.com" target="_blank" rel="noopener">
          <IconButton
            sx={{
              backgroundColor: '#373B53', // Icon background color
              color: '#fff', // Icon color
              '&:hover': {
                backgroundColor: '#50597B', // Hover effect
              },
              width: 48,
              height: 48,
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Link>

        {/* Instagram Icon */}
        <Link href="https://www.instagram.com" target="_blank" rel="noopener">
          <IconButton
            sx={{
              backgroundColor: '#373B53', 
              color: '#fff', 
              '&:hover': {
                backgroundColor: '#50597B', 
              },
              width: 48,
              height: 48,
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Link>

        {/* WhatsApp Icon */}
        <Link href="https://www.whatsapp.com" target="_blank" rel="noopener">
          <IconButton
            sx={{
              backgroundColor: '#373B53', 
              color: '#fff', 
              '&:hover': {
                backgroundColor: '#50597B', 
              },
              width: 48,
              height: 48,
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Link>

      </Box>

      {/* Copyright text */}
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        Copyright © Adarsh Lakhanpal
      </Typography>
    </Box>
  );
};

export default Footer;
