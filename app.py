from flask import Flask, render_template, request, redirect, url_for, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure secret key

# Configure the database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://<username>:<password>@<hostname>/<database_name>'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define a User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    secondname = db.Column(db.String(100), nullable=True)
    surname = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15), nullable=False, unique=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    idNO = db.Column(db.String(50), nullable=False, unique=True)
    province = db.Column(db.String(100), nullable=False)
    district = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Create the database tables (run this once)
@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        session['user'] = email
        return redirect(url_for('home'))
    else:
        return 'Invalid email or password. Please try again.'

@app.route('/register', methods=['GET', 'POST'])
def register():
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

        if not all([firstname, surname, phone, email, idNO, province, district, password]):
            return 'Please fill out all fields.'

        existing_user = User.query.filter((User.email == email) | (User.idNO == idNO)).first()
        if existing_user:
            return 'Email or ID number already exists.'

        hashed_password = generate_password_hash(password)
        new_user = User(
            firstname=firstname,
            secondname=secondname,
            surname=surname,
            phone=phone,
            email=email,
            idNO=idNO,
            province=province,
            district=district,
            password=hashed_password
        )
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))

    return render_template('register.html')

@app.route('/api/user_count', methods=['GET'])
def get_user_count():
    count = User.query.count()
    return jsonify({'user_count': count})

@app.route('/api/idnos', methods=['GET'])
def get_idnos():
    idnos = [user.idNO for user in User.query.all()]
    return jsonify(idnos)

@app.route('/home')
def home():
    return redirect(url_for('serve_index'))

@app.route('/static/index.html')
def serve_index():
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
