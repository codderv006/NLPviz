from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
from spacy.cli import download
import os

# Function to check and install the spaCy model if not already installed
def ensure_model_installed(model_name='en_core_web_sm'):
    if model_name not in spacy.util.get_installed_models():
        print(f"Model '{model_name}' not found. Installing...")
        download(model_name)

# Ensure the spaCy model is installed
ensure_model_installed()

# Load the spaCy model for English language text processing (small model)
nlp = spacy.load('en_core_web_sm')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes, allowing all origins by default

@app.route('/ner', methods=['POST'])
def ner():
    text = request.json.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    doc = nlp(text)
    entities = [{'text': ent.text, 'label': ent.label_} for ent in doc.ents]
    return jsonify(entities)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Update to listen on all interfaces
