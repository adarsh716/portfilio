'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineCard = ({ title, subtitle, duration, dateRange, isLast, isActive }) => (
  <Box
    className="timeline-card"
    sx={{
      display: 'flex',
      marginBottom: isLast ? 0 : 4,
      position: 'relative',
      opacity: isActive ? 1 : 0.5,
      transition: 'opacity 0.3s'
    }}
  >
    <Box sx={{ position: 'relative', width: '24px' }}>
      <Box
        sx={{
          width: '16px',
          height: '16px',
          backgroundColor: isActive ? '#805ad5' : '#4a5568',
          borderRadius: '50%',
          marginRight: 2,
          flexShrink: 0,
          zIndex: 1,
          marginTop: '6px',
          transition: 'background-color 0.3s'
        }}
      />
      {!isLast && (
        <Box
          sx={{
            position: 'absolute',
            left: '7px',
            top: '22px',
            bottom: '-14px',
            width: '2px',
            backgroundColor: isActive ? '#805ad5' : '#4a5568',
            transition: 'background-color 0.3s'
          }}
        />
      )}
    </Box>
    <Card
      sx={{
        backgroundColor: '#1a1f2e',
        color: 'white',
        flex: 1,
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#a0aec0', marginBottom: 1 }}>
          {subtitle}
        </Typography>
        <Typography variant="body2" sx={{ color: '#805ad5', fontWeight: 'bold' }}>
          {duration}
        </Typography>
        <Typography variant="body2" sx={{ color: '#805ad5' }}>
          {dateRange}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const professionalExperiences = [
    {
      title: 'Desenvolvedor Front-end na Ensinio',
      subtitle: 'Desenvolvimento de interfaces interativas e responsivas com React, Next.js e TypeScript. Implementação de designs usando tecnologias como Next, Styled Components e padrões de arquitetura.',
      duration: '1 ano e 7 meses',
      dateRange: 'Abril/2021 - Atualmente'
    },
    {
      title: 'Designer na Viralizi',
      subtitle: 'Desenvolvendo serviços para mídias digitais na Viralizi como Designer.',
      duration: '3 meses',
      dateRange: 'Janeiro/2021 - Abril/2021'
    },
    {
      title: 'Instrutor de programação na SuperGeeks',
      subtitle: 'Curso prático de programação, com ênfase no desenvolvimento de jogos com crianças e adolescentes. Além de suporte para criação de conteúdos e mídias digitais.',
      duration: '1 ano e 11 meses',
      dateRange: 'Fevereiro/2019 - Janeiro/2021'
    },
    {
      title: 'Designer, editor e suporte em hardwares na Alorean',
      subtitle: 'Serviços relacionados ao design, manutenção de hardwares, edições de mídias digitais e gráficas para empresas e pessoas na região de São José dos Campos e cidades próximas (região "boqueirão").',
      duration: '1 ano',
      dateRange: 'Janeiro/2020 - Janeiro/2021'
    },
    {
      title: 'Jovem aprendiz',
      subtitle: 'Atuei na área como jovem aprendiz, no início de 2017 à dezembro de 2017 na empresa Saint-Gobain, atuando no departamento de design, suporte em marketing digital da empresa e TI.',
      duration: '1 ano e 3 meses',
      dateRange: 'Outubro/2016 - Dezembro/2017'
    }
  ];

  const academicExperiences = [
    {
      title: 'Superior, Análise e Desenvolvimento de Sistemas',
      subtitle: 'Curso superior para formação de Tecnólogo em Análise e Desenvolvimento de Sistemas.',
      duration: '3 anos',
      dateRange: 'Agosto/2019 - Agosto/2022'
    },
    {
      title: 'Técnico, Redes de Computadores',
      subtitle: 'Desenvolvimento de habilidades na aplicação, projeção e uso com React, Typescript, Java, Kotlin, Node.js e tecnologias como Next.',
      duration: '1 ano e 6 meses',
      dateRange: 'Fevereiro/2018 - Junho/2019'
    },
    {
      title: 'Inglês - Conversação avançada',
      subtitle: 'No período referente ao ano letivo (semestre) meu nível de inglês atinge Avançado com o intuito de conversação avançada pelo Instituto Federal de Jacareí (IFSP).',
      duration: '6 meses',
      dateRange: 'Julho/2018 - Dezembro/2018'
    },
    {
      title: 'Ensino médio completo',
      subtitle: 'Ao final de 2017 me formei no ensino médio na escola América Dias Sampaio em Jacareí.',
      duration: '',
      dateRange: 'Dezembro/2017'
    }
  ];

  useEffect(() => {
    if (timelineRef.current) {
      const cards = gsap.utils.toArray('.timeline-card');

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
              onEnter: () => setActiveIndex(index)
            }
          }
        );
      });
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0d101e', minHeight: '100vh', padding: 4, pt: 10 }}>
      <Container maxWidth="lg" ref={timelineRef}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', marginBottom: 4 }}>
          Trajetória até aqui
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ color: 'white', marginBottom: 2 }}>
              Área profissional
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#a0aec0', marginBottom: 2 }}>
              2016 - Atualmente
            </Typography>
            <Box sx={{ position: 'relative', paddingLeft: '10px' }}>
              {professionalExperiences.map((exp, index) => (
                <Box key={index} className="timeline-card">
                  <TimelineCard
                    {...exp}
                    isLast={index === professionalExperiences.length - 1}
                    isActive={index <= activeIndex}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ color: 'white', marginBottom: 2 }}>
              Acadêmica
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#a0aec0', marginBottom: 2 }}>
              2014 - Atualmente
            </Typography>
            <Box sx={{ position: 'relative', paddingLeft: '10px' }}>
              {academicExperiences.map((exp, index) => (
                <Box key={index} className="timeline-card">
                  <TimelineCard
                    {...exp}
                    isLast={index === academicExperiences.length - 1}
                    isActive={index + professionalExperiences.length <= activeIndex}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Timeline;
