import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';

function DependencyParsingPage() {
  const [text, setText] = useState('');
  const [treeData, setTreeData] = useState(null);

  const parseDependencies = () => {
    const words = text.split(' ');
    if (words.length < 3) {
      alert('Please enter a sentence with at least three words.');
      return;
    }

    // Simple mock dependency parsing: Root word with two child words
    const data = {
      name: words[1], // Root node
      children: [
        { name: words[0] }, // Left child
        { name: words[2] }  // Right child
      ]
    };

    setTreeData(data);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
        Dependency Parsing
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
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={parseDependencies}
        aria-label="Parse Dependencies"
      >
        Parse Dependencies
      </Button>

      {treeData && (
        <div id="tree-container" style={{ marginTop: '20px', position: 'relative' }}>
          <div className="node" aria-label={`Node: ${treeData.name}`}>
            {treeData.name}
            <div className="children">
              {treeData.children.map((child, index) => (
                <div className="node" key={index} aria-label={`Child Node: ${child.name}`}>
                  {child.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        #tree-container {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
        }
        .node {
          padding: 10px;
          margin: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #f9f9f9;
          text-align: center;
          position: relative;
        }
        .children {
          display: flex;
          justify-content: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
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
}

export default DependencyParsingPage;
