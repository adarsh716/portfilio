'use client';
import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

// Define the type for experience data
interface ProfExperience {
  title: string;
  role: string;
  subtitle: string;
  duration: string;
  dateRange: string;
}
interface EduExperience {
  title: string;
  subtitle: string;
  duration: string;
  dateRange: string;
}

interface TimelineCardProps {
  title: string;
  role: string;
  subtitle: string;
  duration: string;
  dateRange: string;
  isLast: boolean;
}

interface EduTimelineCardProps {
  title: string;
  subtitle: string;
  duration: string;
  dateRange: string;
  isLast: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ title, role, subtitle, duration, dateRange, isLast }) => (
  <Box
    className="timeline-card"
    sx={{
      display: 'flex',
      marginBottom: isLast ? 0 : 4,
      position: 'relative',
    }}
  >
    <Box sx={{ position: 'relative', width: '24px' }}>
      <Box
        sx={{
          width: '16px',
          height: '16px',
          backgroundColor: '#805ad5',
          borderRadius: '50%',
          marginRight: 2,
          flexShrink: 0,
          zIndex: 1,
          marginTop: '6px',
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
            backgroundColor: '#805ad5',
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
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 1 }}>
          {role}
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

const EduTimelineCard: React.FC<EduTimelineCardProps> = ({ title, subtitle, duration, dateRange, isLast }) => (
  <Box
    className="timeline-card"
    sx={{
      display: 'flex',
      marginBottom: isLast ? 0 : 4,
      position: 'relative',
    }}
  >
    <Box sx={{ position: 'relative', width: '24px' }}>
      <Box
        sx={{
          width: '16px',
          height: '16px',
          backgroundColor: '#805ad5',
          borderRadius: '50%',
          marginRight: 2,
          flexShrink: 0,
          zIndex: 1,
          marginTop: '6px',
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
            backgroundColor: '#805ad5',
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
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 1 }}>
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

const NoTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const professionalExperiences: ProfExperience[] = [
    {
      title: 'SDE Intern at Scriptbox',
      role: 'Frontend Developer',
      subtitle:
        'Developed and maintained a responsive front-end for a complex web application using Material UI, React.js, Next.js, and TypeScript.Collaborated with the design team to implement user-friendly interfaces. Worked on a project focusing on enhancing the user experience and integrating secure authentication processes',
      duration: 'Less than 1 Year',
      dateRange: 'June/2024 - Present',
    },
  ];

  const academicExperiences: EduExperience[] = [
    {
      title: 'Matriculation',
      subtitle: 'Sacred Touch Public School',
      duration: 'Percentage - 87.6 %',
      dateRange: '2018 - 2019',
    },
    {
      title: 'Higher Secondary in Non-Med',
      subtitle: 'S.S.S.S Khalsa Sen. Sec. School',
      duration: 'Percentage - 83.8 %',
      dateRange: '2020 - 2021',
    },
    {
      title: 'B.Tech in Computer Science Engineering',
      subtitle: 'Amritsar Group of Colleges',
      duration: 'CGPA - 8.2',
      dateRange: '2021 - 2025',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#0d101e', minHeight: '100vh', padding: 4, pt: 10 }}>
      <Container maxWidth="lg" ref={timelineRef}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', marginBottom: 4 }}>
          Education and Experience
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ color: 'white', marginBottom: 2 }}>
              Professional Experience
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#a0aec0', marginBottom: 2 }}>
              2024 - Present
            </Typography>
            <Box sx={{ position: 'relative', paddingLeft: '10px' }}>
              {professionalExperiences.map((exp, index) => (
                <Box key={index} className="timeline-card">
                  <TimelineCard
                    {...exp}
                    isLast={index === professionalExperiences.length - 1}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ color: 'white', marginBottom: 2 }}>
              Academics
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#a0aec0', marginBottom: 2 }}>
              2018 - Present
            </Typography>
            <Box sx={{ position: 'relative', paddingLeft: '10px' }}>
              {academicExperiences.map((exp, index) => (
                <Box key={index} className="timeline-card">
                  <EduTimelineCard
                    {...exp}
                    isLast={index === academicExperiences.length - 1}
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

export default NoTimeline;
