from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Test route
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "Backend is running!"})

# Example API endpoint
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello from the backend!",
        "items": [1, 2, 3, 4, 5]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
