// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(".nav-button", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 });
  }, []);

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#0d101e', py: 1, borderRadius: '16px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 10 }, borderRadius: '16px', bgcolor: 'rgba(10, 10, 29, 0.784)', m: 3 }}>
        <Link href="/" passHref>
          <Box
            component="a"
            className="title-text"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#5c06b3',
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            {'</>'}
          </Box>
        </Link>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {['Home', 'About Me', 'Experience', 'Skills', 'Projects', 'Recommendations', 'Contact Us'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} passHref>
              <Button
                component="a"
                className="nav-button"
                sx={{
                  color: item === 'Home' ? '#5c06b3' : '#9c9c9c',
                  fontSize: '16px',
                  fontWeight: item === 'Home' ? 'bold' : 'normal',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'transparent',
                  },
                }}
              >
                {item}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
