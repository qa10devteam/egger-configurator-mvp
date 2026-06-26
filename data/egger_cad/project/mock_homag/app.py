from flask import Flask, request, jsonify
import uuid

app = Flask(__name__)

@app.route('/jobs', methods=['POST'])
def create_job():
    # Expect JSON with dxf_url etc.
    data = request.get_json() or {}
    job_id = f"MOCK-{uuid.uuid4().hex[:6].upper()}"
    return jsonify({'job_id': job_id, 'status': 'queued'}), 201

@app.route('/jobs/<job_id>', methods=['GET'])
def get_status(job_id):
    # Simple static status for demo
    return jsonify({'job_id': job_id, 'status': 'completed'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
