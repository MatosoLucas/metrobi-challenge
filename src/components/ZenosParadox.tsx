import { Box, Button, LinearProgress, Typography, } from "@mui/material"

import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';

import React from "react"

export const ZenosParadox = () => {
  const [position1, setPosition1] = React.useState<number>(0);
  const [position2, setPosition2] = React.useState<number>(0);
  const [isActive, setIsActive] = React.useState<boolean>(false)

  const turtleSpeed = 10

  
  const updatePositions = React.useCallback(() => {
    const newPosition2 = Math.min(position2 + turtleSpeed, 100);
    const newPosition1 = position1 + (newPosition2 - position1) / 2;

    setPosition1(newPosition1);
    setPosition2(newPosition2);
  }, [position1, position2, turtleSpeed]);

  const handleDemonstration = () => {
    if (position2 === 100) {
      setPosition1(0);
      setPosition2(0);
      setIsActive(false);
    } else {
      setIsActive(!isActive);
    }
  };

  React.useEffect(() => {
    if (isActive && position2 < 100) {
      const interval = setInterval(updatePositions, 500);
      return () => clearInterval(interval);
    } else if (position2 >= 100) {
      setIsActive(false);
    }
  }, [isActive, position2, updatePositions]);

 return (
    <Box sx={{ padding: 8, border: '1px solid grey', borderRadius: 4 }}>
      <Button onClick={handleDemonstration}>
        {position2 === 100 ? "Reset" : isActive ? "Pause" : "Start"} Demonstration
      </Button>

      <Box sx={{ position: 'relative', mt: 8 }}>
        <LinearProgress variant="determinate" value={position1} sx={{ height: 10 }} />
        <PersonIcon
          sx={{
            width: 25,
            position: 'absolute',
            height: 25,
            color: 'blue',
            bottom: 16,
            left: `${position1}%`,
            transform: 'translateX(-50%)',
            transition: 'left 0.5s linear',
          }}
        />
      </Box>

      <Box sx={{ position: 'relative', mt: 8 }}>
        <LinearProgress variant="determinate" value={position2} color="success" sx={{ height: 10 }} />
        <PetsIcon
          sx={{
            width: 25,
            position: 'absolute',
            height: 25,
            color: 'green',
            bottom: 16,
            left: `${position2}%`,
            transform: 'translateX(-50%)',
            transition: 'left 0.5s linear',
          }}
        />
      </Box>

      <Typography sx={{ color: 'black', mt: 2 }}>Zeno's Paradox</Typography>
    </Box>
  );
};