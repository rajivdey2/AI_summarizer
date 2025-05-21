from ollama import chat , ChatResponse
from flask import Flask, request, jsonify
from flask_cors import CORS
app= Flask(__name__)
CORS(app)

@app.route("/ai", methods= ["GET", "POST"])
def ai():
    if request.method=="POST":
        notes = request.get_json()
        if notes and "notes" in notes:
            response: ChatResponse = chat(model="llama3", messages=[
                {
                    'role': 'user',
                    'content': f'ONLYReturn withSummarized Notes: {notes}'
                }
            ])
            if response:
                return jsonify(response.message.content)
if __name__ == "__main__"  :
    app.run(debug=True)          
    