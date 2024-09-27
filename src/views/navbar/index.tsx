'use client'
// components/Navbar.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string>('home'); 
  const router = useRouter();


  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navigateTo = (path: string, button: string) => {
    setSelectedButton(button); 
    router.push(path); 
    setDrawerOpen(false); 
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: '#0d101e', py: 1, borderRadius: '16px' }}>
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          px: { xs: 2, md: 10 }, 
          borderRadius: '16px', 
          bgcolor: 'rgba(10, 10, 29, 0.784)', 
          m: 3, 
          boxShadow: '0 0 10px #5c06b3',  
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
          <Button
            className="nav-button"
            sx={{
              color: selectedButton === 'home' ? '#5c06b3' : '#9c9c9c',
              fontSize: '16px',
              fontWeight: selectedButton === 'home' ? 'bold' : 'normal',
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
            onClick={() => navigateTo('/home', 'home')}
          >
            Home
          </Button>

          <Button
            className="nav-button"
            sx={{
              color: selectedButton === 'about-me' ? '#5c06b3' : '#9c9c9c',
              fontSize: '16px',
              fontWeight: selectedButton === 'about-me' ? 'bold' : 'normal',
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
            onClick={() => navigateTo('/about-me', 'about-me')}
          >
            About Me
          </Button>

          <Button
            className="nav-button"
            sx={{
              color: selectedButton === 'experience' ? '#5c06b3' : '#9c9c9c',
              fontSize: '16px',
              fontWeight: selectedButton === 'experience' ? 'bold' : 'normal',
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
            onClick={() => navigateTo('/experience', 'experience')}
          >
            Experience
          </Button>

          <Button
            className="nav-button"
            sx={{
              color: selectedButton === 'skills' ? '#5c06b3' : '#9c9c9c',
              fontSize: '16px',
              fontWeight: selectedButton === 'skills' ? 'bold' : 'normal',
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
            onClick={() => navigateTo('/skills', 'skills')}
          >
            Skills
          </Button>

          <Button
            className="nav-button"
            sx={{
              color: selectedButton === 'projects' ? '#5c06b3' : '#9c9c9c',
              fontSize: '16px',
              fontWeight: selectedButton === 'projects' ? 'bold' : 'normal',
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
            onClick={() => navigateTo('/projects', 'projects')}
          >
            Projects
          </Button>

          <Button
            className="nav-button"
            sx={{
              color: selectedButton === 'contact-us' ? '#5c06b3' : '#9c9c9c',
              fontSize: '16px',
              fontWeight: selectedButton === 'contact-us' ? 'bold' : 'normal',
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#5c06b3',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
            onClick={() => navigateTo('/contact-us', 'contact-us')}
          >
            Contact Us
          </Button>
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
              backdropFilter: 'blur(10px)',  
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
              <ListItem button onClick={() => navigateTo('/home', 'home')}>
                <ListItemText
                  primary="Home"
                  sx={{ color: selectedButton === 'home' ? '#5c06b3' : '#fff' }}
                />
              </ListItem>
              <ListItem button onClick={() => navigateTo('/about-me', 'about-me')}>
                <ListItemText
                  primary="About Me"
                  sx={{ color: selectedButton === 'about-me' ? '#5c06b3' : '#fff' }}
                />
              </ListItem>
              <ListItem button onClick={() => navigateTo('/experience', 'experience')}>
                <ListItemText
                  primary="Experience"
                  sx={{ color: selectedButton === 'experience' ? '#5c06b3' : '#fff' }}
                />
              </ListItem>
              <ListItem button onClick={() => navigateTo('/skills', 'skills')}>
                <ListItemText
                  primary="Skills"
                  sx={{ color: selectedButton === 'skills' ? '#5c06b3' : '#fff' }}
                />
              </ListItem>
              <ListItem button onClick={() => navigateTo('/projects', 'projects')}>
                <ListItemText
                  primary="Projects"
                  sx={{ color: selectedButton === 'projects' ? '#5c06b3' : '#fff' }}
                />
              </ListItem>
              <ListItem button onClick={() => navigateTo('/contact-us', 'contact-us')}>
                <ListItemText
                  primary="Contact Us"
                  sx={{ color: selectedButton === 'contact-us' ? '#5c06b3' : '#fff' }}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
