from flask import Flask,request,jsonify
from ai_service import ask_ai
from dotenv import load_dotenv


# Load environment variables
load_dotenv()

app = Flask(__name__)

@app.route('/ai-chat',methods=['POST'])
def ai_chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({'error': 'No message provided'}),400
    
    ai_reply = ask_ai(user_input)
    return jsonify({'reply':ai_reply}),200

@app.route('/')
def home():
    return {'message': 'This is Flask'}

if __name__ == '__main__':
    app.run(debug=True)
