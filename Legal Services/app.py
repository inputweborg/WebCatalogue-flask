from flask import Flask, render_template, request, redirect, url_for, session
import firebase_admin
from firebase_admin import credentials, db

# Initialize Flask app
app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Initialize Firebase Admin SDK
cred = credentials.Certificate('skey.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://your-database-name.firebaseio.com/'
})

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Implement authentication logic here
        session['username'] = username
        return redirect(url_for('dashboard'))
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        # Fetch legal documents from Firebase
        user = session['username']
        ref = db.reference(f'users/{user}/documents')
        documents = ref.get()
        return render_template('dashboard.html', documents=documents)
    return redirect(url_for('login'))

@app.route('/add', methods=['POST'])
def add():
    if 'username' in session:
        user = session['username']
        ref = db.reference(f'users/{user}/documents')
        data = {
            'title': request.form['title'],
            'content': request.form['content']
        }
        ref.push(data)
        return redirect(url_for('dashboard'))
    return redirect(url_for('login'))

@app.route('/delete/<id>')
def delete(id):
    if 'username' in session:
        user = session['username']
        ref = db.reference(f'users/{user}/documents/{id}')
        ref.delete()
        return redirect(url_for('dashboard'))
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
