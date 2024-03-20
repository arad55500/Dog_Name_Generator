import React from 'react'; // eslint-disable-line
import Button from '@mui/material/Button'; // Import Button from Material UI
import Box from '@mui/material/Box'; // Import Box from Material UI

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
