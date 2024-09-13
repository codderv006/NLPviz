import React, { useState } from 'react';
import * as pos from 'pos';
import { Container, TextField, Typography, Button, Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// POS tag descriptions
const posTagDescriptions = {
  'CC': 'Coordinating conjunction',
  'CD': 'Cardinal number',
  'DT': 'Determiner',
  'EX': 'Existential there',
  'FW': 'Foreign word',
  'IN': 'Preposition or subordinating conjunction',
  'JJ': 'Adjective',
  'JJR': 'Adjective, comparative',
  'JJS': 'Adjective, superlative',
  'LS': 'List item marker',
  'MD': 'Modal',
  'NN': 'Noun, singular or mass',
  'NNS': 'Noun, plural',
  'NNP': 'Proper noun, singular',
  'NNPS': 'Proper noun, plural',
  'PDT': 'Predeterminer',
  'POS': 'Possessive ending',
  'PRP': 'Personal pronoun',
  'PRP$': 'Possessive pronoun',
  'RB': 'Adverb',
  'RBR': 'Adverb, comparative',
  'RBS': 'Adverb, superlative',
  'RP': 'Particle',
  'SYM': 'Symbol',
  'TO': 'to',
  'UH': 'Interjection',
  'VB': 'Verb, base form',
  'VBD': 'Verb, past tense',
  'VBG': 'Verb, gerund or present participle',
  'VBN': 'Verb, past participle',
  'VBP': 'Verb, non-3rd person singular present',
  'VBZ': 'Verb, 3rd person singular present',
  'WDT': 'Wh-determiner',
  'WP': 'Wh-pronoun',
  'WP$': 'Possessive wh-pronoun',
  'WRB': 'Wh-adverb',
};

const POSTagging = () => {
  const [sentence, setSentence] = useState('');
  const [taggedWords, setTaggedWords] = useState([]);

  const handlePOSTag = () => {
    const words = new pos.Lexer().lex(sentence);
    const tagger = new pos.Tagger();
    const tagged = tagger.tag(words);
    setTaggedWords(tagged);
  };

  // Extract unique POS tags used in the sentence
  const getUniquePOSTags = () => {
    const uniqueTags = new Set(taggedWords.map(taggedWord => taggedWord[1]));
    return [...uniqueTags];
  };

  const renderPOSTagTable = () => {
    const uniqueTags = getUniquePOSTags();

    return (
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>POS Tag</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueTags.map((tag) => (
              <TableRow key={tag}>
                <TableCell>{tag}</TableCell>
                <TableCell>{posTagDescriptions[tag] || 'Unknown'}</TableCell>
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
        Part-of-Speech Tagging
      </Typography>
      
      {/* Explanation Section */}
      <Box style={{ marginBottom: '30px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          What is Part-of-Speech Tagging?
        </Typography>
        <Typography variant="body1" component="div">
          Part-of-Speech (POS) Tagging is a process in natural language processing (NLP) that involves identifying and labeling each word in a sentence with its corresponding part of speech. This includes categories such as nouns, verbs, adjectives, adverbs, and more. POS tagging helps in understanding the grammatical structure of sentences and is essential for various NLP applications like parsing, machine translation, and information extraction.
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '20px' }}>
          For example, consider the sentence:
        </Typography>
        <Typography variant="body1" component="div" style={{ fontStyle: 'italic' }}>
          "The quick brown fox jumps over the lazy dog."
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '10px' }}>
          After POS tagging, the words in the sentence would be labeled as follows:
        </Typography>
        <Typography variant="body1" component="div" style={{ fontStyle: 'italic' }}>
          [("The", "DT"), ("quick", "JJ"), ("brown", "JJ"), ("fox", "NN"), ("jumps", "VBZ"), ("over", "IN"), ("the", "DT"), ("lazy", "JJ"), ("dog", "NN")]
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '10px' }}>
          Here, "DT" stands for Determiner, "JJ" for Adjective, "NN" for Noun, and "VBZ" for Verb, 3rd person singular present.
        </Typography>
      </Box>
      
      {/* Input and POS Tagging Button */}
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

      {/* Display the tagged words as Chips */}
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

      {/* Display the table of POS tags and descriptions */}
      {taggedWords.length > 0 && renderPOSTagTable()}
    </Container>
  );
};

export default POSTagging;
