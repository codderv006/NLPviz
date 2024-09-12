import React from 'react';
import Tokenization from './components/Tokenization';
import POSTagging from './components/POSTagging';
import NER from './components/NER';
// Import all the other components similarly...

const Topics = ({ selectedTopic }) => {
  switch (selectedTopic) {
    case "Tokenization":
      return <Tokenization />;
    case "POS Tagging":
      return <POSTagging />;
    case "NER":
      return <NER />;
    // Add other cases similarly...
    default:
      return <div>Select a topic to visualize</div>;
  }
};

export default Topics;
