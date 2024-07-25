# app.py
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    background_image_url = url_for('static', filename='img/mainpage.png')
    return render_template('landingpage.html', background_image_url=background_image_url)

if __name__ == '__main__':
    app.run(debug=True)
