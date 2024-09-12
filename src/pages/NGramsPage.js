import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function NGramsPage() {
  const [text, setText] = useState('');
  const [nGrams, setNGrams] = useState([]);
  
  const generateNGrams = (n) => {
    const words = text.split(/\s+/);
    const nGrams = [];
    for (let i = 0; i <= words.length - n; i++) {
      nGrams.push(words.slice(i, i + n).join(' '));
    }
    return nGrams;
  };

  const plotNGrams = (n) => {
    const grams = generateNGrams(n);
    const counts = grams.reduce((acc, gram) => {
      acc[gram] = (acc[gram] || 0) + 1;
      return acc;
    }, {});
    const labels = Object.keys(counts);
    const values = Object.values(counts);

    return {
      labels,
      datasets: [{
        label: `${n}-grams`,
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        N-grams
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={() => setNGrams(plotNGrams(2))}>Generate Bigrams</Button>
      <Button variant="contained" color="secondary" onClick={() => setNGrams(plotNGrams(3))}>Generate Trigrams</Button>
      <div style={{ height: '400px' }}>
        <Chart type='bar' data={nGrams} />
      </div>
    </Container>
  );
}

export default NGramsPage;
