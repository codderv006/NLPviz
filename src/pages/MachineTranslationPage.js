import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from 'axios';

// Placeholder texts for different languages
const placeholders = {
  hi: "हिंदी में पाठ्य दर्ज करें (उदाहरण: नमस्ते दुनिया)",
  mr: "मराठी मध्ये मजकूर प्रविष्ट करा (उदाहरण: नमस्कार जग)",
  es: "Ingrese texto en español (por ejemplo: hola mundo)",
};

function MachineTranslationPage() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [language, setLanguage] = useState("hi"); // Default to Hindi

  const translateText = async () => {
    if (!text) {
      alert("Please enter some text.");
      return;
    }

    try {
      const response = await axios.post(
        "https://deep-translate1.p.rapidapi.com/language/translate/v2",
        {
          q: text,
          source: "en",
          target: language,
        },
        {
          headers: {
            "X-Rapidapi-Key": process.env.REACT_APP_RAPIDAPI_KEY,
            "X-Rapidapi-Host": "deep-translate1.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );

      const translatedText = response.data.data.translations.translatedText;
      setTranslation(translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
      setTranslation("Translation failed.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: "20px", marginTop: '20px' }}>
        Machine Translation
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Enter English text here"
        placeholder={placeholders[language]}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <FormControl
        fullWidth
        variant="outlined"
        style={{ marginBottom: "20px" }}
      >
        <InputLabel>Translate to</InputLabel>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          label="Language"
        >
          <MenuItem value="hi">Hindi</MenuItem>
          <MenuItem value="mr">Marathi</MenuItem>
          <MenuItem value="es">Spanish</MenuItem> {/* Adding Spanish as an example */}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={translateText}>
        Translate
      </Button>

      <Typography variant="h6" component="div" style={{ marginTop: "20px" }}>
        Translation: {translation}
      </Typography>
    </Container>
  );
}

export default MachineTranslationPage;
