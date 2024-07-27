// components/CustomCursor.tsx
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: event.clientX - 15,
        y: event.clientY - 15,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Box
        className="cursor"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          background: 'url(/custom-cursor.svg) no-repeat center center',
          backgroundSize: 'contain',
          pointerEvents: 'none',
          zIndex: 1000,
          transform: 'translate(-50%, -50%)',
        }}
      ></Box>
      <Box
        className="cursor-follower"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'rgba(92, 6, 179, 0.3)',
          pointerEvents: 'none',
          zIndex: 999,
          transform: 'translate(-50%, -50%)',
        }}
      ></Box>
    </>
  );
};

export default CustomCursor;
