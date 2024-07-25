from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('index.html', section='about')

@app.route('/admission')
def admission():
    return render_template('index.html', section='admission')

@app.route('/academics')
def academics():
    return render_template('index.html', section='academics')

@app.route('/events')
def events():
    return render_template('index.html', section='events')

@app.route('/gallery')
def gallery():
    return render_template('index.html', section='gallery')

@app.route('/contact')
def contact():
    return render_template('index.html', section='contact')

@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
