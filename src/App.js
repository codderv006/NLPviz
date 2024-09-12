import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import TokenizationPage from './pages/TokenizationPage';
import POSTaggingPage from './pages/POSTaggingPage';
import NERPage from './pages/NERPage';
import DependencyParsingPage from './pages/DependencyParsingPage';
import WordEmbeddingsPage from './pages/WordEmbeddingsPage';
import TFIDFPage from './pages/TFIDFPage';
import NGramsPage from './pages/NGramsPage';
import SentimentAnalysisPage from './pages/SentimentAnalysisPage';
import AttentionMechanismPage from './pages/AttentionMechanismPage';
import MachineTranslationPage from './pages/MachineTranslationPage';
import TextClassificationPage from './pages/TextClassificationPage';

const concepts = [
  { name: 'Tokenization', description: 'Splitting text into individual tokens.', path: '/tokenization' },
  { name: 'POS Tagging', description: 'Classifying words into parts of speech.', path: '/pos-tagging' },
  { name: 'NER', description: 'Identifying named entities in text.', path: '/ner' },
  { name: 'Dependency Parsing', description: 'Analyzing grammatical structure.', path: '/dependency-parsing' },
  { name: 'Word Embeddings', description: 'Representing words in continuous vector space.', path: '/word-embeddings' },
  { name: 'TF-IDF', description: 'Measuring word importance in documents.', path: '/tf-idf' },
  { name: 'N-grams', description: 'Generating sequences of words.', path: '/ngrams' },
  { name: 'Sentiment Analysis', description: 'Determining sentiment of text.', path: '/sentiment-analysis' },
  { name: 'Attention Mechanism', description: 'Visualizing attention in models.', path: '/attention-mechanism' },
  { name: 'Machine Translation', description: 'Translating text between languages.', path: '/machine-translation' },
  { name: 'Text Classification', description: 'Classifying text into categories.', path: '/text-classification' },
];

function App() {
  return (
    <Router>
      <Container>
        <header style={{ padding: '20px', textAlign: 'right' }}>
          <Typography variant="h5" component="div">NLP Visualizer</Typography>
        </header>
        <Routes>
          <Route path="/" element={
            <div>
              <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="h4" component="div">Learn NLP Concepts</Typography>
              </header>
              <Grid container spacing={2}>
                {concepts.map((concept, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" component="div">{concept.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{concept.description}</Typography>
                        <Link to={concept.path}>
                          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Explore</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          } />
          <Route path="/tokenization" element={<TokenizationPage />} />
          <Route path="/pos-tagging" element={<POSTaggingPage />} />
          <Route path="/ner" element={<NERPage />} />
          <Route path="/dependency-parsing" element={<DependencyParsingPage />} />
          <Route path="/word-embeddings" element={<WordEmbeddingsPage />} />
          <Route path="/tf-idf" element={<TFIDFPage />} />
          <Route path="/ngrams" element={<NGramsPage />} />
          <Route path="/sentiment-analysis" element={<SentimentAnalysisPage />} />
          <Route path="/attention-mechanism" element={<AttentionMechanismPage />} />
          <Route path="/machine-translation" element={<MachineTranslationPage />} />
          <Route path="/text-classification" element={<TextClassificationPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
