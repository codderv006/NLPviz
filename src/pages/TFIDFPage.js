import React, { useState } from 'react';
import { Container, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TFIDFPage = () => {
  const [tfidfData, setTfidfData] = useState([]);

  // TF-IDF calculation
  const calculateTFIDF = () => {
    const documents = [
      'The cat is on the mat.',
      'My dog and cat are the best.',
      'The locals are playing.',
    ];

    const queryWords = ['the', 'cat'];

    // TF Calculation
    const calculateTF = (word, doc) => {
      const words = doc.toLowerCase().split(' ');
      return words.filter(w => w === word).length / words.length;
    };

    // IDF Calculation
    const calculateIDF = (word) => {
      const numDocs = documents.length;
      const numDocsWithWord = documents.filter(doc => doc.toLowerCase().includes(word)).length;
      return Math.log(numDocs / (numDocsWithWord || 1));
    };

    // TF-IDF Calculation
    const tfidf = queryWords.flatMap(word => documents.map((doc, idx) => {
      const tf = calculateTF(word, doc.toLowerCase());
      const idf = calculateIDF(word);
      const tfidfScore = tf * idf;
      return { word, document: `D${idx + 1}`, tf, idf, score: tfidfScore };
    }));

    setTfidfData(tfidf);
  };

  // Prepare data for visualization
  const plotData = {
    labels: tfidfData.map(entry => `${entry.word} in ${entry.document}`),
    datasets: [
      {
        label: 'TF-IDF Scores',
        data: tfidfData.map(entry => entry.score),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Term-Document',
        },
      },
      y: {
        title: {
          display: true,
          text: 'TF-IDF Score',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" component="div" style={{ marginBottom: '20px',  marginTop:'20px' }}>
        TF-IDF Calculation Example
      </Typography>
      
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        <strong>TF-IDF Formula:</strong><br />
        <span style={{ color: 'blue' }}>
          TF-IDF = TF × IDF
        </span><br />
        <strong>Where:</strong><br />
        <span style={{ color: 'green' }}>
          TF (Term Frequency) = (Number of times term t appears in a document) / (Total number of terms in the document)
        </span><br />
        <span style={{ color: 'red' }}>
          IDF (Inverse Document Frequency) = log((Total number of documents) / (Number of documents containing term t))
        </span><br />
      </Typography>

      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        <strong>Example Documents:</strong><br />
        <pre>
          D1: The cat is on the mat.<br />
          D2: My dog and cat are the best.<br />
          D3: The locals are playing.
        </pre>
      </Typography>

      <Button variant="contained" color="primary" onClick={calculateTFIDF}>
        Compute TF-IDF
      </Button>

      <Box style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          TF-IDF Scores Table:
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Word</TableCell>
                <TableCell>Document</TableCell>
                <TableCell>TF</TableCell>
                <TableCell>IDF</TableCell>
                <TableCell>TF-IDF Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tfidfData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.word}</TableCell>
                  <TableCell>{row.document}</TableCell>
                  <TableCell>{row.tf.toFixed(2)}</TableCell>
                  <TableCell>{row.idf.toFixed(2)}</TableCell>
                  <TableCell>{row.score.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
          TF-IDF Scores Visualization:
        </Typography>
        <Bar
          data={plotData}
          options={options}
        />
      </Box>
    </Container>
  );
};

export default TFIDFPage;
