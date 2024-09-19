// components/Navbar.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { gsap } from 'gsap';
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Brush as BehanceIcon } from '@mui/icons-material';
import { SiTwitter, SiPinterest, SiDribbble } from 'react-icons/si';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  React.useEffect(() => {
    gsap.fromTo(
      ".nav-button", 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    'Home', 'About Me', 'Experience', 'Skills', 'Projects', 'Recommendations', 'Contact Us'
  ];

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#0d101e', py: 1, borderRadius: '16px' }}>
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          px: { xs: 2, md: 10 }, 
          borderRadius: '16px', 
          bgcolor: 'rgba(10, 10, 29, 0.784)', 
          m: 3, 
          boxShadow: '0 0 10px #5c06b3',  // Static box shadow
        }}
      >
        <Link href="/" passHref>
          <Box
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

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {menuItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} passHref>
              <Button
                className="nav-button"
                sx={{
                  color: item === 'Home' ? '#5c06b3' : '#9c9c9c',
                  fontSize: '16px',
                  fontWeight: item === 'Home' ? 'bold' : 'normal',
                  textTransform: 'none',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: '#5c06b3',
                    color: '#fff',
                    borderRadius: '12px'
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
                <span className="button-text">{item}</span>
              </Button>
            </Link>
          ))}
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              bgcolor: 'rgba(10, 10, 29, 0.95)',
              color: '#fff',
              width: '250px',
              backdropFilter: 'blur(10px)',  // Translucent background
            }
          }}
        >
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  bgcolor: '#fff',
                  color: '#5c06b3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}
              >
                {'</>'}
              </Box>
            </Box>
            <List>
              {menuItems.map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} passHref>
                  <ListItem button  onClick={toggleDrawer(false)}>
                    <ListItemText
                      primary={
                        <Box
                          component="span"
                          className="nav-button"
                          sx={{
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'all 0.3s',
                            '&:hover': {
                              color: '#fff',
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
                          <span className="button-text">{item}</span>
                        </Box>
                      }
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
