import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get API Key from .env
api_key = os.getenv("GEMINI_API_KEY")

# Set up Gemini API Key
genai.configure(api_key=api_key)

# Function to ask Gemini AI
def ask_ai(user_input):
    try:
        model = genai.GenerativeModel("gemini-pro")  # Use the free "gemini-pro" model
        response = model.generate_content(user_input)
        
        if response.text:
            print(f"Reply: {response.text}")
            return response.text
        else:
            return "Error: No response from Gemini API."

    except Exception as e:
        
        return f"Error: {str(e)}"