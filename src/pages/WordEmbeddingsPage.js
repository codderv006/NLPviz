import React, { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";
import Plot from "react-plotly.js";

function WordEmbeddingsPage() {
  const [text, setText] = useState("");
  const [plotData, setPlotData] = useState([]);

  const generatePlot = () => {
    // Mock plot data generation
    const words = text.split(" ").map((word, index) => ({
      x: Math.random() * 10,
      y: Math.random() * 10,
      text: word,
    }));
    setPlotData(words);
  };

  const plot = plotData.map((word, index) => ({
    x: [word.x],
    y: [word.y],
    mode: "markers",
    type: "scatter",
    text: [word.text],
    marker: { size: 12 },
  }));

  return (
    <Container>
      <Typography
        variant="h4"
        component="div"
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        Word Embeddings Visualization
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        <strong>What are Word Embeddings?</strong>
        <br />
        Word embeddings are numerical representations of words in a
        high-dimensional space. They capture semantic relationships between
        words such that words with similar meanings are closer together in this
        space. For example, the words "king" and "queen" would be positioned
        closer to each other than "king" and "dog".
        <br />
        <br />
        <strong>How Does This Tool Work?</strong>
        <br />
        This tool allows you to visualize word embeddings by generating a
        scatter plot. Each word is mapped to a point in a 2D space. The X and Y
        coordinates of each point are generated randomly in this example for
        demonstration purposes. In a real-world scenario, these coordinates
        would be determined based on pre-trained word vectors.
        <br />
        <br />
        <strong>How to Use This Tool:</strong>
        <br />
        1. Enter a list of words separated by spaces in the text field.
        <br />
        2. Click "Generate Plot" to visualize the embeddings.
        <br />
        3. Each point on the plot represents a word from your input.
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter words here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={generatePlot}>
        Generate Plot
      </Button>
      <Box style={{ marginTop: "20px", borderRadius: "30px" }}>
        <Plot
          data={plot}
          layout={{
            title: "Word Embeddings",
            xaxis: { title: "X" },
            yaxis: { title: "Y" },
          }}
          style={{ width: "100%", height: "500px" }}
        />
      </Box>
    </Container>
  );
}

export default WordEmbeddingsPage;
