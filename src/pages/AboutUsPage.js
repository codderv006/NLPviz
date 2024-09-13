import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function AboutUsPage() {
  return (
    <Container>
      <Box sx={{ padding: '20px', marginTop: '20px', backgroundColor: '#f4f4f4', borderRadius: '10px' }}>
        <Typography variant="h4" component="div" gutterBottom sx={{ color: 'black' }}>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: 'black' }}>
          This NLP Visualizer app is designed to help users explore and learn about various concepts in Natural Language Processing (NLP). From tokenization to machine translation, this tool offers interactive ways to grasp NLP basics.
        </Typography>
        <Typography variant="h6" component="div" gutterBottom sx={{ color: 'black' }}>
          Developer:
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: 'black' }}>
          Vedant Pawar
        </Typography>
        <Typography variant="h6" component="div" gutterBottom sx={{ color: 'black' }}>
          Contact Info:
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: 'black' }}>
          Email: hello.vedantp@gmail.com
        </Typography>
        <Typography variant="h6" component="div" gutterBottom sx={{ color: 'black' }}>
          Repository:
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: 'black' }}>
          <a href="https://github.com/codderv006/NLPviz" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
          github.com/codderv006/NLPviz
          </a>
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUsPage;
