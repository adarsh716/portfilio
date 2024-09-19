import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CareerCardProps {
  title: string;
  duration: string;
  dateRange: string;
  isActive: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, duration, dateRange, isActive }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div style={{
        width: '20px',
        height: '20px',
        backgroundColor: isActive ? '#962dff' : '#1a1f2e',
        border: `3px solid ${isActive ? '#fff' : '#962dff'}`,
        borderRadius: '50%',
        position: 'absolute',
        left: '-35px',
        transition: 'background-color 0.3s, border-color 0.3s'
      }}></div>
      <Card sx={{ backgroundColor: '#1a1f2e', color: 'white', marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ color: '#962dff' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            {duration}
          </Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            {dateRange}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerCard;
