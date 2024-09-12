import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';
import Plot from 'react-plotly.js';

function WordEmbeddingsPage() {
  const [text, setText] = useState('');
  const [plotData, setPlotData] = useState([]);

  const generatePlot = () => {
    // Mock plot data generation
    const words = text.split(' ').map((word, index) => ({
      x: Math.random() * 10,
      y: Math.random() * 10,
      text: word
    }));
    setPlotData(words);
  };

  const plot = plotData.map((word, index) => ({
    x: [word.x],
    y: [word.y],
    mode: 'markers',
    type: 'scatter',
    text: [word.text],
    marker: { size: 12 }
  }));

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        Word Embeddings
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter words here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={generatePlot}>Generate Plot</Button>
      <Plot
        data={plot}
        layout={{ title: 'Word Embeddings', xaxis: { title: 'X' }, yaxis: { title: 'Y' } }}
        style={{ width: '100%', height: '500px' }}
      />
    </Container>
  );
}

export default WordEmbeddingsPage;