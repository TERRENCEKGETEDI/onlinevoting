from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure secret key

# In-memory database for demonstration (replace with a database in a real-world application)
users = {}
userS = {}
user_count = 0  # Variable to keep track of the number of registered users

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    if email in users and check_password_hash(users[email]['password'], password):
        session['user'] = email
        return redirect(url_for('home'))
    else:
        return 'Invalid email or password. Please try again.'

@app.route('/register', methods=['GET', 'POST'])
def register():
    global user_count  # Declare the variable as global to modify it

    if request.method == 'POST':
        firstname = request.form.get('firstname')
        secondname = request.form.get('secondname')
        surname = request.form.get('surname')
        phone = request.form.get('phone')
        email = request.form.get('email')
        idNO = request.form.get('idNO')
        province = request.form.get('province')
        district = request.form.get('district')
        password = request.form.get('password')

        # Validate all required fields are present
        if not all([firstname, secondname, surname, phone, email, idNO, province, district, password]):
            return 'Please fill out all fields.'

        if email in users:
            return 'Email already exists. Please choose a different one.'
        if idNO in userS:
            return 'ID number already registered. Please choose a different one.'

        # Hash the password before storing it
        hashed_password = generate_password_hash(password)

        # Store user data in the database
        users[email] = {
            'password': hashed_password,
            'firstname': firstname,
            'secondname': secondname,
            'surname': surname,
            'phone': phone,
            'idNO': idNO,
            'province': province,
            'district': district
        }
        userS[idNO] = {
            'password': hashed_password,
            'firstname': firstname,
            'secondname': secondname,
            'surname': surname,
            'phone': phone,
            'email': email,
            'province': province,
            'district': district
        }

        user_count += 1  # Increment the user count

        return redirect(url_for('index'))

    return render_template('register.html')

@app.route('/api/user_data', methods=['GET'])
def get_user_data():
    user_email = session.get('user')
    if user_email:
        user_data = users.get(user_email)
        if user_data:
            return jsonify({
                'province': user_data['province'],
                'district': user_data['district'],
                'idNO': user_data['idNO']  # Include idNO in the response
            })
    return jsonify({'error': 'User not logged in'}), 401


@app.route('/api/user_count', methods=['GET'])
def get_user_count():
    return jsonify({'user_count': user_count})

@app.route('/api/idnos', methods=['GET'])
def get_idnos():
    idnos = list(userS.keys())
    return jsonify(idnos)

@app.route('/home')
def home():
    return redirect(url_for('serve_index'))

@app.route('/static/index.html')
def serve_index():
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
