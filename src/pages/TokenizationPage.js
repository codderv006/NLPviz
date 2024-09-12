import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';

function TokenizationPage() {
  const [text, setText] = useState('');
  const [tokens, setTokens] = useState([]);

  const tokenize = () => {
    setTokens(text.split(/\s+/)); // Simple tokenization by whitespace
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        Tokenization
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
      <Button variant="contained" color="primary" onClick={tokenize}>Tokenize</Button>
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
