// components/ExperienceSection.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Code as CodeIcon, Work as WorkIcon, School as SchoolIcon } from '@mui/icons-material';

const HomeExperienceSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        mt: { xs: 5, md: 8, lg: 10 },
        bgcolor: '#0d101e',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: '1100px',
          mb: 4,
          gap: 5, // Add gap between items for small screens
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 3, sm: 5 },
            border: '3px solid #5d06b3',
            borderRadius: '8px',
            width: { xs: '300px', sm: '300px', md: '350px', lg: '400px' },
            mb: { xs: 2, sm: 0 }, // Add margin bottom for small screens
            boxShadow: '0 0 10px #5d06b3',
            animation: 'glow 1.5s infinite alternate',
          }}
        >
          <WorkIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h6">SDE</Typography>
          <Typography variant="h5" fontWeight="bold">Intern</Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 3, sm: 5 },
            bgcolor: '#5d06b3',
            border: '3px solid #fff',
            borderRadius: '8px',
            width: { xs: '300px', sm: '300px', md: '350px', lg: '400px' },
            mb: { xs: 2, sm: 0 }, // Add margin bottom for small screens
            boxShadow: '0 0 10px #fff',
            animation: 'glow 1.5s infinite alternate',
          }}
        >
          <CodeIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h6">3 years of</Typography>
          <Typography variant="h5" fontWeight="bold">Programming</Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 3, sm: 5 },
            border: '3px solid #5d06b3',
            borderRadius: '8px',
            width: { xs: '300px', sm: '300px', md: '350px', lg: '400px' },
            boxShadow: '0 0 10px #5d06b3',
            animation: 'glow 1.5s infinite alternate',
          }}
        >
          <SchoolIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h6">Full Stack</Typography>
          <Typography variant="h5" fontWeight="bold">Developer</Typography>
        </Box>
      </Box>
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #5d06b3, 0 0 10px #5d06b3, 0 0 15px #5d06b3, 0 0 20px #5d06b3, 0 0 25px #5d06b3;
          }
          100% {
            box-shadow: 0 0 20px #5d06b3, 0 0 25px #5d06b3, 0 0 30px #5d06b3, 0 0 35px #5d06b3, 0 0 40px #5d06b3;
          }
        }
      `}</style>
    </Box>
  );
};

export default HomeExperienceSection;
