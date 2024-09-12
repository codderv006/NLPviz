import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const topics = [
  "Tokenization", "POS Tagging", "NER", "Dependency Parsing",
  "Word Embeddings", "TF-IDF", "N-grams", "Sentiment Analysis",
  "Attention Mechanism", "Machine Translation", "Text Classification"
];

const Navbar = ({ setSelectedTopic }) => {
  return (
    <div className="navbar">
      <List component="nav">
        {topics.map((topic, index) => (
          <ListItem button key={index} onClick={() => setSelectedTopic(topic)}>
            <ListItemText primary={topic} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Navbar;
