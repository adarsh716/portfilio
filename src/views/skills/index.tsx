// components/Skills.tsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import gsap from 'gsap';

const skills = {
  daily: [
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
    { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  ],
  others: [
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'C', icon: 'https://skillicons.dev/icons?i=c' },
    { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp' },
    { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
  ],
};

const Skills: React.FC = () => {
  const dailyIconsRef = useRef([]);
  const othersIconsRef = useRef([]);

  useEffect(() => {
    dailyIconsRef.current = dailyIconsRef.current.slice(0, skills.daily.length);
    othersIconsRef.current = othersIconsRef.current.slice(0, skills.others.length);

    const timeline = gsap.timeline({ repeat: -1, yoyo: true });

    // Animating daily icons from left
    timeline.fromTo(
      dailyIconsRef.current.reverse(), // Reversing the array to animate last to first
      { x: '-100vw' },
      { x: '0', duration: 1, stagger: 0.1 }
    );

    // Animating others icons from left
    timeline.fromTo(
      othersIconsRef.current.reverse(), // Reversing the array to animate last to first
      { x: '-100vw' },
      { x: '0', duration: 1, stagger: 0.1 },
      '-=0.9' // Overlap the timelines slightly
    );

    timeline.to({}, { duration: 5 }); // Hold for 5 seconds

    // Animating daily icons to right
    timeline.to(
      dailyIconsRef.current, // Not reversed to animate first to last
      { x: '100vw', duration: 1, stagger: 0.1 }
    );

    // Animating others icons to right
    timeline.to(
      othersIconsRef.current, // Not reversed to animate first to last
      { x: '100vw', duration: 1, stagger: 0.1 },
      '-=0.9' // Overlap the timelines slightly
    );

    // Prepare for the next loop
    dailyIconsRef.current.reverse();
    othersIconsRef.current.reverse();

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0d101e', color: '#fff', padding: '2rem', textAlign: 'center',marginTop: '6rem' }}>
      <Typography sx={{ color: '#f8f8f8', fontWeight: 600, fontSize: '24px' }}>👨‍💻 Skills</Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, marginTop: '3rem', marginBottom: '2rem', color: '#fff' }}>
        Technologies and Skills
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#aaa' }}>
        Technologies I use daily
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.daily.map((skill, index) => (
          <Grid item key={index} ref={(el) => (dailyIconsRef.current[index] = el)}>
            <Box
              sx={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  boxShadow: '0px 4px 15px rgba(92, 6, 179, 0.4)',
                },
              }}
            >
              <img src={skill.icon} alt={skill.name} style={{ width: 50, height: 50 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" sx={{ marginTop: '2rem', marginBottom: '1rem', color: '#aaa' }}>
        Other technologies I have worked with
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.others.map((skill, index) => (
          <Grid item key={index} ref={(el) => (othersIconsRef.current[index] = el)}>
            <Box
              sx={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  boxShadow: '0px 4px 15px rgba(92, 6, 179, 0.4)',
                },
              }}
            >
              <img src={skill.icon} alt={skill.name} style={{ width: 50, height: 50 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
