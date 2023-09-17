from flask import Flask, render_template, request
import openai

app = Flask(__name__)

# Initialize OpenAI API key and chat log
openai.api_key = "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"
chat_log = []

@app.route('/')
def chat_page():
    return render_template('chat.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.form['user_message']

    if user_message.lower() == "quit":
        return "Chat Ended"
    else:
        chat_log.append({"role": "user", "content": user_message})
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=chat_log
        )
        assistant_response = response['choices'][0]['message']['content']
        chat_log.append({"role": "assistant", "content": assistant_response})

        return assistant_response

if __name__ == "__main__":
    app.run(host='192.168.8.163', port=5500)
