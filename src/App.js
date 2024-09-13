import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TokenizationPage from "./pages/TokenizationPage";
import POSTaggingPage from "./pages/POSTaggingPage";
import NERPage from "./pages/NERPage";
import DependencyParsingPage from "./pages/DependencyParsingPage";
import WordEmbeddingsPage from "./pages/WordEmbeddingsPage";
import TFIDFPage from "./pages/TFIDFPage";
import NGramsPage from "./pages/NGramsPage";
import SentimentAnalysisPage from "./pages/SentimentAnalysisPage";
import AttentionMechanismPage from "./pages/AttentionMechanismPage";
import MachineTranslationPage from "./pages/MachineTranslationPage";
import TextClassificationPage from "./pages/TextClassificationPage";
import AboutUsPage from "./pages/AboutUsPage";

// Concepts
const concepts = [
  {
    name: "Tokenization",
    description: "Splitting text into individual tokens.",
    path: "/tokenization",
  },
  {
    name: "POS Tagging",
    description: "Classifying words into parts of speech.",
    path: "/pos-tagging",
  },
  {
    name: "NER",
    description: "Identifying named entities in text.",
    path: "/ner",
  },
  {
    name: "Dependency Parsing",
    description: "Analyzing grammatical structure.",
    path: "/dependency-parsing",
  },
  {
    name: "Word Embeddings",
    description: "Representing words in continuous vector space.",
    path: "/word-embeddings",
  },
  {
    name: "TF-IDF",
    description: "Measuring word importance in documents.",
    path: "/tf-idf",
  },
  {
    name: "N-grams",
    description: "Generating sequences of words.",
    path: "/ngrams",
  },
  {
    name: "Sentiment Analysis",
    description: "Determining sentiment of text.",
    path: "/sentiment-analysis",
  },
  {
    name: "Attention Mechanism",
    description: "Visualizing attention in models.",
    path: "/attention-mechanism",
  },
  {
    name: "Machine Translation",
    description: "Translating text between languages.",
    path: "/machine-translation",
  },
  {
    name: "Text Classification",
    description: "Classifying text into categories.",
    path: "/text-classification",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  // Create light and dark themes using the updated color palette
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#EEEDEB" : "#747264", // Text and primary actions
      },
      secondary: {
        main: darkMode ? "#E6B9A6" : "#E0CCBE", // Secondary actions or highlights
      },
      background: {
        default: darkMode ? "#2F3645" : "#EEEDEB", // Page background
        paper: darkMode ? "#2F3645" : "#FFFFFF", // Card background or paper elements
      },
      text: {
        primary: darkMode ? "#EEEDEB" : "#3C3633", // Main text color
        secondary: darkMode ? "#939185" : "#747264", // Secondary text color
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Navbar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NLP Visualizer
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <Typography>{darkMode ? "Dark Mode" : "Light Mode"}</Typography>
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="/about-us"
              style={{
                color: "inherit",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <Button color="inherit">About Us</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <header
                    style={{
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h4" component="div">
                      Learn NLP Concepts
                    </Typography>
                  </header>
                  <Grid container spacing={2}>
                    {concepts.map((concept, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                          sx={{
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        >
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {concept.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {concept.description}
                            </Typography>
                            <Link to={concept.path}>
                              <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "10px" }}
                              >
                                Explore
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              }
            />
            <Route path="/tokenization" element={<TokenizationPage />} />
            <Route path="/pos-tagging" element={<POSTaggingPage />} />
            <Route path="/ner" element={<NERPage />} />
            <Route
              path="/dependency-parsing"
              element={<DependencyParsingPage />}
            />
            <Route path="/word-embeddings" element={<WordEmbeddingsPage />} />
            <Route path="/tf-idf" element={<TFIDFPage />} />
            <Route path="/ngrams" element={<NGramsPage />} />
            <Route
              path="/sentiment-analysis"
              element={<SentimentAnalysisPage />}
            />
            <Route
              path="/attention-mechanism"
              element={<AttentionMechanismPage />}
            />
            <Route
              path="/machine-translation"
              element={<MachineTranslationPage />}
            />
            <Route
              path="/text-classification"
              element={<TextClassificationPage />}
            />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
