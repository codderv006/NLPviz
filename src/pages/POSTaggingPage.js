import React, { useState } from 'react';
import * as pos from 'pos';
import { Container, TextField, Typography, Button, Box, Chip } from '@mui/material';

const POSTagging = () => {
  const [sentence, setSentence] = useState('');
  const [taggedWords, setTaggedWords] = useState([]);

  const handlePOSTag = () => {
    const words = new pos.Lexer().lex(sentence);
    const tagger = new pos.Tagger();
    const tagged = tagger.tag(words);
    setTaggedWords(tagged);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        Part-of-Speech Tagging
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        Enter a sentence to tag its parts of speech:
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter sentence here"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handlePOSTag}>
        Tag POS
      </Button>

      <Box style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          Tagged Words:
        </Typography>
        <div>
          {taggedWords.map((taggedWord, index) => (
            <Chip
              key={index}
              label={`${taggedWord[0]} (${taggedWord[1]})`}
              style={{ marginRight: '10px', marginBottom: '5px' }}
            />
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default POSTagging;
