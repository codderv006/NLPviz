import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';

function TokenizationPage() {
  const [text, setText] = useState('');
  const [tokens, setTokens] = useState([]);

  const tokenize = () => {
    setTokens(text.split(/\s+/)); // Simple tokenization by whitespace
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px', marginTop: '20px' }}>
        Tokenization
      </Typography>
      
      {/* Explanation Section */}
      <Box style={{ marginBottom: '30px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          What is Tokenization?
        </Typography>
        <Typography variant="body1" component="div">
          Tokenization is a text processing technique that involves splitting a string of text into smaller units called tokens. These tokens are often words or punctuation marks, but can also be more complex units depending on the application. The purpose of tokenization is to simplify the text for further analysis, such as parsing, part-of-speech tagging, or machine learning tasks.
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '20px' }}>
          For example, the sentence:
        </Typography>
        <Typography variant="body1" component="div" style={{ fontStyle: 'italic' }}>
          "Tokenization is the first step in NLP."
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '10px' }}>
          Would be tokenized into the following tokens:
        </Typography>
        <Typography variant="body1" component="div" style={{ fontStyle: 'italic' }}>
          ["Tokenization", "is", "the", "first", "step", "in", "NLP."]
        </Typography>
      </Box>
      
      {/* Input and Tokenization Button */}
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
      <Button variant="contained" color="primary" onClick={tokenize}>
        Tokenize
      </Button>
      
      {/* Display Tokenized Output */}
      <div style={{ marginTop: '20px' }}>
        {tokens.map((token, index) => (
          <span key={index} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            {token}
          </span>
        ))}
      </div>
    </Container>
  );
}

export default TokenizationPage;
