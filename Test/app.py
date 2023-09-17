from flask import Flask, render_template, request
import openai

app = Flask(__name__)

# Initialize OpenAI API key and chat log
openai.api_key = "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"
chat_log = []
chat_log.append({ "role": "system", "content": "Your name is Veronica. You are financial expert that helps people with financial decisions. They way you write is profesional, Classy, and smart." })
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
            messages= chat_log
        )
        assistant_response = response['choices'][0]['message']['content']
        chat_log.append( {"role": "assistant", "content": assistant_response})

        return assistant_response

if __name__ == "__main__":
    app.run(host='192.168.8.163', port=5500)
