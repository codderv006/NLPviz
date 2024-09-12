import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';
import Sentiment from 'sentiment';

function SentimentAnalysisPage() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeSentiment = () => {
    const sentimentAnalyzer = new Sentiment();
    const result = sentimentAnalyzer.analyze(text);
    const sentimentValue = result.score > 0 ? 'Positive' : result.score < 0 ? 'Negative' : 'Neutral';
    setSentiment(sentimentValue);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        Sentiment Analysis
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
      <Button variant="contained" color="primary" onClick={analyzeSentiment}>
        Analyze Sentiment
      </Button>
      <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
        Sentiment: {sentiment}
      </Typography>
    </Container>
  );
}

export default SentimentAnalysisPage;
