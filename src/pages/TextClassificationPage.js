import React, { useState } from "react";
import { Container, TextField, Typography, Button } from "@mui/material";

const mockCategories = {
  sports: ["football", "basketball", "tennis"],
  technology: ["computer", "software", "AI"],
};

function TextClassificationPage() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const classifyText = () => {
    const words = text.split(/\s+/);
    const categories = Object.keys(mockCategories);
    let detectedCategory = "Unknown";

    for (const category of categories) {
      if (words.some((word) => mockCategories[category].includes(word))) {
        detectedCategory = category;
        break;
      }
    }

    setCategory(detectedCategory);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: "20px" }}>
        Text Classification
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={classifyText}>
        Classify Text
      </Button>
      <Typography variant="h6" component="div" style={{ marginTop: "20px" }}>
        Category: {category}
      </Typography>
    </Container>
  );
}

export default TextClassificationPage;
