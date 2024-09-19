'use client'

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, CardMedia } from '@mui/material';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Space Cart',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tags: ['Online', 'Typescript'],
    imageUrl: '/images/profile/space.png', // replace with your image path
  },
  {
    title: 'Youtube Clone',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tags: ['Online', 'Typescript'],
    imageUrl: '/images/profile/space.png', // replace with your image path
  },
  {
    title: 'CodePen Clone',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tags: ['Online', 'Typescript'],
    imageUrl: '/images/profile/space.png', // replace with your image path
  },
  {
    title: 'Restaurant Booking',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tags: ['Online', 'Typescript'],
    imageUrl: '/images/profile/space.png', // replace with your image path
  },
  {
    title: 'Portfolio',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tags: ['Online', 'Typescript'],
    imageUrl: '/images/profile/space.png', // replace with your image path
  },
  {
    title: 'Zapier Clone',
    description: 'Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.',
    tags: ['Online', 'Typescript'],
    imageUrl: '/images/profile/space.png', // replace with your image path
  },
  // Add more projects as needed
];

const ProjectPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: index * 0.2 });
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0d101e', color: '#fff', padding: '2rem', mt: { xs: 5, lg: 0, md: 0 }, ml: { xs: 2, lg: 10, md: 10 } }}>
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #5c06b3, 0 0 10px #5c06b3, 0 0 15px #5c06b3, 0 0 20px #5c06b3, 0 0 25px #5c06b3;
          }
          100% {
            box-shadow: 0 0 25px #5c06b3, 0 0 25px #5c06b3, 0 0 30px #5c06b3, 0 0 35px #5c06b3, 0 0 40px #5c06b3;
          }
        }
        @keyframes alternateGlow {
          0% {
            box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 25px #fff;
          }
          100% {
            box-shadow: 0 0 25px #fff, 0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff, 0 0 40px #fff;
          }
        }
      `}</style>
      <Typography gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '48px', md: '55px', lg: '57px' } }}>Works and Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, cardIndex) => (
          <Grid item xs={12} sm={6} md={4} key={cardIndex} sx={{ mt: { xs: 5, lg: 5, md: 5 } }}>
            <Card
              ref={(el) => {
                if (el) cardsRef.current[cardIndex] = el;
              }}
              sx={{
                backgroundColor: cardIndex === 1 || cardIndex === 4 ? '#5c06b3' : '#0d101e',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #5c06b3',
                borderRadius: '8px',
                boxShadow: '0 0 5px #5c06b3, 0 0 10px #5c06b3',
                transition: 'box-shadow 0.5s',
                '&:hover': {
                  animation: cardIndex === 1 || cardIndex === 4 ? 'alternateGlow 1.5s infinite alternate' : 'glow 1.5s infinite alternate'
                }
              }}
            >
              <CardContent sx={{ textAlign: 'left', color: '#fff', width: '100%' }}>
                <Typography sx={{ color: '#fff', mb: 2, fontWeight: 500, fontSize: '20px' }}>{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2, color: '#fff' }}>{project.description}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} sx={{ margin: '0.25rem', backgroundColor: cardIndex === 1 || cardIndex === 4 ? '#fff' : '#5c06b3', color: cardIndex === 1 || cardIndex === 4 ? '#5c06b3' : '#fff' }} />
                  ))}
                </Box>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
                sx={{ width: '90%', height: 'auto', maxWidth: '300px', mt: 2, mb: 3, borderRadius: '15px' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectPage;
