from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Commit test from Flask!", "data": [1, 2, 3]})

if __name__ == '__main__':
    app.run(debug=True, port=5000)