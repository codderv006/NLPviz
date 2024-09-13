import React, { useState } from 'react';
import { Container, TextField, Typography, Button, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NGramsPage = () => {
  const [text, setText] = useState('');
  const [nGrams, setNGrams] = useState(null);
  const [selectedN, setSelectedN] = useState(2); // 2 for bigrams, 3 for trigrams
  const [wordCloudData, setWordCloudData] = useState([]);

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

    setWordCloudData(labels.map(label => ({ text: label, value: counts[label] })));

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

  const handleGenerateNGrams = (n) => {
    setSelectedN(n);
    const data = plotNGrams(n);
    setNGrams(data);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px',  marginTop:'20px' }}>
        N-grams Analysis
      </Typography>
      <Typography variant="body1" component="div" style={{ marginBottom: '20px' }}>
        <strong>What are N-grams?</strong><br />
        N-grams are contiguous sequences of `n` items (words or characters) from a given text. They help in analyzing the frequency of patterns within the text.
      </Typography>
      <div style={{ marginBottom: '20px' }}>
        <Typography variant="body1" component="div" style={{ marginBottom: '10px' }}>
          <strong>Bigrams (n=2)</strong>: Pairs of consecutive words, e.g., "the cat", "cat is".
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Trigrams (n=3)</strong>: Triplets of consecutive words, e.g., "the cat is", "cat is on".
        </Typography>
      </div>
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
      <RadioGroup
        row
        value={selectedN}
        onChange={(e) => handleGenerateNGrams(parseInt(e.target.value))}
        style={{ marginBottom: '20px' }}
      >
        <FormControlLabel value={2} control={<Radio />} label="Bigrams" />
        <FormControlLabel value={3} control={<Radio />} label="Trigrams" />
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={() => handleGenerateNGrams(selectedN)}>
        Generate N-Grams
      </Button>

      <Box style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          N-Grams Visualization:
        </Typography>
        <div style={{ height: '400px' }}>
          {nGrams ? <Chart type='bar' data={nGrams} /> : <Typography>No data to display</Typography>}
        </div>
      </Box>
    </Container>
  );
};

export default NGramsPage;
