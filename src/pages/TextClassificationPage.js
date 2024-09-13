import React, { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";

// Expanded categories with more words
const mockCategories = {
  sports: ["football", "basketball", "tennis", "soccer", "cricket"],
  technology: ["computer", "software", "AI", "internet", "robotics"],
  travel: ["vacation", "holiday", "trip", "destination", "journey"],
  food: ["pizza", "burger", "sushi", "pasta", "salad"],
};

function TextClassificationPage() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const classifyText = () => {
    const lowercasedText = text.toLowerCase();
    const words = lowercasedText.split(/\s+/);
    const categories = Object.keys(mockCategories);
    let detectedCategory = "Unknown";

    // Check each category for matching keywords
    for (const category of categories) {
      if (mockCategories[category].some((keyword) => lowercasedText.includes(keyword))) {
        detectedCategory = category;
        break;
      }
    }

    setCategory(detectedCategory);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: "20px",  marginTop:'20px' }}>
        Text Classification
      </Typography>
      <Typography variant="body1" component="div" style={{ marginBottom: "20px" }}>
        Text classification involves assigning a category or label to text based on its content. 
        This example classifies sentences into categories like "sports", "technology", "travel", and "food".
      </Typography>
      <Typography variant="body1" component="div" style={{ marginBottom: "20px" }}>
        Example categories:
      </Typography>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="div" style={{ marginBottom: "10px" }}>
          - <strong>Sports:</strong> Includes words like "football", "basketball", "soccer".
        </Typography>
        <Typography variant="body1" component="div" style={{ marginBottom: "10px" }}>
          - <strong>Technology:</strong> Includes words like "computer", "AI", "robotics".
        </Typography>
        <Typography variant="body1" component="div" style={{ marginBottom: "10px" }}>
          - <strong>Travel:</strong> Includes words like "vacation", "trip", "journey".
        </Typography>
        <Typography variant="body1" component="div" style={{ marginBottom: "10px" }}>
          - <strong>Food:</strong> Includes words like "pizza", "burger", "sushi".
        </Typography>
      </Box>
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
