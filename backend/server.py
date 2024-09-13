from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy

# Load the spaCy model for English language text processing (small model)
# used 
nlp = spacy.load('en_core_web_sm')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes, allowing all origins by default

@app.route('/ner', methods=['POST'])
def ner():
    text = request.json.get('text', '')
    doc = nlp(text)
    entities = [{'text': ent.text, 'label': ent.label_} for ent in doc.ents]
    return jsonify(entities)

if __name__ == '__main__':
    app.run(debug=True)
