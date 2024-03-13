import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Prompt = ({ onGenerate }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Button 
        variant="contained" 
        color="primary" 
        onClick={onGenerate}
      >
        Generate Dog Name
      </Button>
    </Box>
  );
};

export default Prompt;
