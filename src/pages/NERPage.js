import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

const defaultEntities = {
  'John': 'PERSON',
  'Paris': 'LOCATION',
  '2023': 'DATE'
};

function NERPage() {
  const [text, setText] = useState('');
  const [entities, setEntities] = useState(defaultEntities);
  const [highlightedText, setHighlightedText] = useState('');

  const highlightEntities = () => {
    let modifiedText = text;
    Object.entries(entities).forEach(([entity, type]) => {
      const regex = new RegExp(`\\b${entity}\\b`, 'g');
      modifiedText = modifiedText.replace(regex, `<span data-entity="${type}" style="background-color: ${getColor(type)}; padding: 2px; border-radius: 3px; cursor: pointer;">${entity}</span>`);
    });
    setHighlightedText(modifiedText);
  };

  const getColor = (type) => {
    switch (type) {
      case 'PERSON': return 'lightblue';
      case 'LOCATION': return 'lightgreen';
      case 'DATE': return 'lightcoral';
      default: return 'lightgray';
    }
  };

  const handleEntityType = (type) => {
    switch (type) {
      case 'PERSON': return 'Person';
      case 'LOCATION': return 'Location';
      case 'DATE': return 'Date';
      default: return 'Unknown';
    }
  };

  const renderHighlightedText = () => {
    return (
      <div style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: highlightedText }} />
    );
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        Named Entity Recognition
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
      <Button variant="contained" color="primary" onClick={highlightEntities}>Highlight Entities</Button>
      {renderHighlightedText()}
    </Container>
  );
}

export default NERPage;
