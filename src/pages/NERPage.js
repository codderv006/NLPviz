import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

function NERPage() {
  const [text, setText] = useState('');
  const [entities, setEntities] = useState([]);
  const [highlightedText, setHighlightedText] = useState('');

  // Function to call Flask API for NER
  const fetchEntities = async () => {
    try {
      const response = await axios.post('http://localhost:5000/ner', { text });
      setEntities(response.data);
      highlightEntities(response.data);
    } catch (error) {
      console.error("Error fetching entities:", error);
    }
  };

  const highlightEntities = (entities) => {
    let modifiedText = text;
    entities.forEach((entity) => {
      const regex = new RegExp(`\\b${entity.text}\\b`, 'g');
      modifiedText = modifiedText.replace(regex, `<span data-entity="${entity.label}" style="background-color: ${getColor(entity.label)}; padding: 2px; border-radius: 3px; cursor: pointer;">${entity.text}</span>`);
    });
    setHighlightedText(modifiedText);
  };

  const getColor = (type) => {
    switch (type) {
      case 'PERSON': return 'lightblue';
      case 'ORG': return 'lightgreen';
      case 'GPE': return 'lightcoral';
      case 'DATE': return 'lightyellow';
      case 'LOC': return 'lightgray';
      default: return 'lightpink';
    }
  };

  const renderHighlightedText = () => {
    return (
      <div style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: highlightedText }} />
    );
  };

  const renderEntityTable = () => {
    const uniqueEntityTypes = [...new Set(entities.map(entity => entity.label))];

    return (
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Entity Type</TableCell>
              <TableCell>Color Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueEntityTypes.map((type) => (
              <TableRow key={type}>
                <TableCell>{type}</TableCell>
                <TableCell>
                  <div style={{
                    backgroundColor: getColor(type),
                    width: '50px',
                    height: '20px',
                    borderRadius: '3px'
                  }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px', marginTop: '20px' }}>
        Named Entity Recognition
      </Typography>

      {/* Explanation Section */}
      <div style={{ marginBottom: '30px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          What is Named Entity Recognition (NER)?
        </Typography>
        <Typography variant="body1" component="div">
          Named Entity Recognition (NER) is a technique in natural language processing (NLP) that identifies and classifies named entities in text into predefined categories. These categories typically include:
        </Typography>
        <ul>
          <li><strong>PERSON</strong> - Names of people (e.g., "John Doe")</li>
          <li><strong>ORG</strong> - Names of organizations (e.g., "Google")</li>
          <li><strong>GPE</strong> - Geopolitical entities like countries and cities (e.g., "New York")</li>
          <li><strong>DATE</strong> - Dates and times (e.g., "January 1, 2022")</li>
          <li><strong>LOC</strong> - Locations (e.g., "Paris")</li>
        </ul>
        <Typography variant="body1" component="div" style={{ marginTop: '20px' }}>
          For example, consider the sentence:
        </Typography>
        <Typography variant="body1" component="div" style={{ fontStyle: 'italic' }}>
          "Apple Inc. was founded by Steve Jobs and Steve Wozniak in Cupertino, California on April 1, 1976."
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '10px' }}>
          After applying NER, the entities in this sentence would be highlighted and classified as follows:
        </Typography>
        <Typography variant="body1" component="div" style={{ fontStyle: 'italic' }}>
          [("Apple Inc.", "ORG"), ("Steve Jobs", "PERSON"), ("Steve Wozniak", "PERSON"), ("Cupertino", "GPE"), ("California", "GPE"), ("April 1, 1976", "DATE")]
        </Typography>
      </div>

      {/* Input and NER Button */}
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
      <Button variant="contained" color="primary" onClick={fetchEntities}>Highlight Entities</Button>

      {/* Display the highlighted text */}
      {renderHighlightedText()}

      {/* Display the table of entity types and color codes */}
      {entities.length > 0 && renderEntityTable()}
    </Container>
  );
}

export default NERPage;
