import React from 'react';
import Typography from '@mui/material/Typography'; // Import Typography from Material UI

const GeneratedName = ({ name }) => {
  return (
    <Typography variant="h5" gutterBottom margin={2}>
      Generated Name: {name ? name : 'No name generated yet'}
    </Typography>
  );
};

export default GeneratedName;
