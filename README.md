# **🧠 NLPViz a NLP concept visualizer tool**

## Overview
Welcome to the NLP Visualizer! 🌐 This web application offers an interactive and intuitive UI for learning key Natural Language Processing (NLP) concepts through visual representations. Explore and understand various NLP techniques through dynamic visualizations and detailed explanations.

## Topics Covered

- **Tokenization**: Breaking down text into words, sentences, or other units.
- **Part-of-Speech (POS) Tagging**: Identifying parts of speech like nouns, verbs, adjectives, etc.
- **Named Entity Recognition (NER)**: Detecting and classifying named entities in text.
- **Dependency Parsing**: Understanding grammatical structure and relationships between words.
- **Word Embeddings**: Visualizing word representations in vector space.
- **TF-IDF**: Term Frequency-Inverse Document Frequency for feature extraction.
- **N-grams**: Analyzing sequences of N words or characters.
- **Sentiment Analysis**: Determining the sentiment expressed in text.
- **Attention Mechanism**: Understanding the importance of different words in a sequence.
- **Machine Translation**: Translating text from one language to another.
- **Text Classification**: Categorizing text into predefined classes.

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/codderv006/NLPviz.git
    cd backend
    ```

2. Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Download and link the spaCy model:
    ```bash
    python -m spacy download en_core_web_sm
    ```

4. Run the Flask app:
    ```bash
    python app.py
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd nlp-visualizer
    ```

2. Install npm dependencies:
    ```bash
    npm install
    ```

3. Run the React app:
    ```bash
    npm start
    ```

## Deployment

- The backend is deployed on Render: [https://nlpviz.onrender.com](https://nlpviz.onrender.com)
- The frontend is hosted on Render: [https://nlpviz-qvao.onrender.com/](https://nlpviz-qvao.onrender.com/).

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.

## Contact

For any questions or feedback, please contact [hello.vedantp@gmail.com](mailto:hello.vedantp@gmail.com).

---

Happy coding! 🎉
