from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask!", "data": [1, 2, 3]})

if __name__ == '__main__':
    app.run(debug=True, port=5000)