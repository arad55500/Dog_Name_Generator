import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios
import Prompt from './components/Prompt';
import GeneratedName from './components/GeneratedName';
import Container from '@mui/material/Container';

function App() {
  const [generatedName, setGeneratedName] = useState('');

  const generateName = () => {
    axios.get('http://localhost:3001/generate-name')
      .then(response => {
        setGeneratedName(response.data.name);
      })
      .catch(error => console.error('Error fetching name:', error));
  };

  return (
    <Container maxWidth="sm">
      <Prompt onGenerate={generateName} />
      <GeneratedName name={generatedName} />
    </Container>
  );
}

export default App;
