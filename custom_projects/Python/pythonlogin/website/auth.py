from flask import Blueprint, render_template, request, flash, redirect, url_for

from . import db
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)


@auth.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in!', category="success")
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password', category="error")
        else:
            flash('No user found', category="error")
    return render_template("login.html", user=current_user)


@auth.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


# noinspection PyArgumentList
@auth.route("/sign-up", methods=['GET', 'POST'])
def sign_up():
    if request.method == "POST":
        email = request.form.get('email')
        firstname = request.form.get('FrName')
        password = request.form.get('password')
        password1 = request.form.get('password1')

        user = User.query.filter_by(email=email).first()
        if user:
            flash('User already registered!', category="error")
        elif len(email) < 4:
            flash('Email too short', category="error")
        elif len(firstname) < 2:
            flash('Too short name', category='error')
        elif password != password1:
            flash('Passwords don\'t match', category='error')
        elif len(password) < 7:
            flash('Too short password', category='error')
        else:
            new_user = User(email=email, first_name=firstname, password=generate_password_hash(password, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            flash('Success, you can login now', category='success')
            return redirect(url_for('auth.login'))

    return render_template("signup.html", user=current_user)
