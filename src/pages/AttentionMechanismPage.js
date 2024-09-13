import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Plot from 'react-plotly.js';

const exampleAttentionWeights = {
  'The': [0.2, 0.3, 0.5],
  'quick': [0.4, 0.1, 0.5],
  'brown': [0.3, 0.5, 0.2],
  'fox': [0.1, 0.6, 0.3]
};

function AttentionMechanismPage() {
  const [plotData, setPlotData] = useState([]);
  const [explanation, setExplanation] = useState('');

  // Function to plot attention weights
  const plotAttention = () => {
    const words = Object.keys(exampleAttentionWeights);
    const weights = words.map(word => exampleAttentionWeights[word]);

    setPlotData([
      {
        type: 'heatmap',
        z: weights,
        x: words,
        y: words,
        colorscale: 'Viridis'
      }
    ]);

    // Generate explanation
    const explanationText = `
      The heatmap above represents the attention weights for each word in the sentence "The quick brown fox". 
      Each cell in the heatmap shows the attention weight between pairs of words. 
      For example, the cell at row "quick" and column "fox" represents how much attention the word "quick" pays to the word "fox". 
      Darker colors indicate higher attention weights, meaning the words are more relevant to each other.
    `;
    setExplanation(explanationText);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px',  marginTop:'20px' }}>
        Attention Mechanism
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        In this example, we visualize the attention weights of a simple sentence: "The quick brown fox". 
        The attention weights help us understand how different words in the sentence attend to each other. 
        This example demonstrates how attention mechanisms work in NLP models, allowing them to focus on relevant words.
      </Typography>
      <Button variant="contained" color="primary" onClick={plotAttention}>
        Show Attention
      </Button>
      <Box sx={{ marginTop: '20px', marginBottom: '60px', height: '400px' }}>
        <Plot
          data={plotData}
          layout={{ 
            title: 'Attention Weights', 
            xaxis: { title: 'Words' }, 
            yaxis: { title: 'Words' },
            autosize: true
          }}
        />
      </Box>
      {explanation && (
        <Typography variant="body1" style={{ marginTop: '20px', marginBottom:'20px' }}>
          {explanation}
        </Typography>
      )}
    </Container>
  );
}

export default AttentionMechanismPage;
