import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';
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
      <Typography variant="h4" component="div" style={{ marginBottom: '20px',  marginTop:'20px' }}>
        Sentiment Analysis
      </Typography>
      
      <Box style={{ marginBottom: '20px' }}>
        <Typography variant="body1" component="div">
          <strong>What is Sentiment Analysis?</strong><br />
          Sentiment analysis is a natural language processing (NLP) technique used to determine the emotional tone behind a body of text. It helps in understanding whether the sentiment conveyed in the text is positive, negative, or neutral.
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '10px' }}>
          <strong>Realistic Examples:</strong><br />
          - <strong>Customer Reviews</strong>: Companies use sentiment analysis to gauge customer feedback on products or services. Positive reviews can indicate customer satisfaction, while negative reviews highlight areas needing improvement.<br />
          - <strong>Social Media Monitoring</strong>: Sentiment analysis can track public opinion about brands, events, or topics by analyzing posts and comments on social media platforms.<br />
          - <strong>Market Research</strong>: Businesses can analyze market sentiment to forecast trends and understand consumer preferences based on product reviews, news articles, and other textual data.
        </Typography>
      </Box>

      <br/>

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
