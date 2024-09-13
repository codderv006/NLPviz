import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Tooltip,
} from "@mui/material";

// Mock dependency parsing function
const parseDependencies = (sentence) => {
  const words = sentence.split(" ");
  if (words.length < 3) {
    return null; // Not enough words for meaningful parsing
  }

  // Simple mock dependency structure
  return {
    name: words[1], // Root node
    description: "Main action or verb", // Description for the root node
    children: [
      {
        name: words[0],
        description: "Subject or the first part of the sentence",
      }, // Left child
      { name: words[2], description: "Object or complement" }, // Right child
      { name: words.slice(3).join(" "), description: "Remaining words" }, // Remaining words as a single child
    ],
  };
};

const DependencyParsingPage = () => {
  const [text, setText] = useState("");
  const [treeData, setTreeData] = useState(null);

  const handleParseDependencies = () => {
    const data = parseDependencies(text);
    if (!data) {
      alert("Please enter a sentence with at least three words.");
      return;
    }
    setTreeData(data);
  };

  const renderTree = (node) => {
    if (!node) return null;

    return (
      <div className="node">
        <Tooltip title={node.description || ""} arrow>
          <div>{node.name}</div>
        </Tooltip>
        {node.children && (
          <div className="children">
            {node.children.map((child, index) => (
              <div key={index} className="node">
                {renderTree(child)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: "20px", marginTop:'20px' }}>
        Dependency Parsing
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        <strong>What is Dependency Parsing?</strong>
        <br />
        Dependency parsing is a natural language processing (NLP) technique used
        to analyze the grammatical structure of a sentence. It identifies the
        relationships between words and their dependencies, revealing how words
        in a sentence are connected.
        <br />
        <br />
        In dependency parsing, each word in a sentence is linked to another
        word, forming a tree structure. The root node of the tree typically
        represents the main action or verb of the sentence, and other nodes
        (children) represent various parts of the sentence that depend on the
        root.
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        <strong>How to Use This Tool:</strong>
        <br />
        1. Enter a sentence in the text field.
        <br />
        2. Click on "Parse Dependencies" to generate the dependency tree.
        <br />
        3. The tree will be displayed below, showing the root word and its
        dependencies.
        <br />
        4. Hover over any node in the tree to see a description of its role in
        the sentence.
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Enter sentence here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Enter sentence here"
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleParseDependencies}
        aria-label="Parse Dependencies"
      >
        Parse Dependencies
      </Button>

      {treeData && (
        <Box style={{ marginTop: "20px" }}>
          <Typography
            variant="h6"
            component="div"
            style={{ marginBottom: "10px" }}
          >
            Dependency Tree:
          </Typography>
          <div id="tree-container">{renderTree(treeData)}</div>
        </Box>
      )}

      <style>{`
        #tree-container {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
          background: #f9f9f9;
        }
        .node {
          padding: 10px;
          margin: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #e9ecef;
          text-align: center;
          position: relative;
          display: inline-block;
        }
        .children {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .children .node {
          margin: 0 10px;
        }
        .node:after {
          content: '';
          position: absolute;
          width: 1px;
          background: #000;
          top: -10px;
          left: 50%;
          height: 10px;
        }
        .children .node:before {
          content: '';
          position: absolute;
          width: 1px;
          background: #000;
          top: -10px;
          left: 50%;
          height: 10px;
        }
      `}</style>
    </Container>
  );
};

export default DependencyParsingPage;
