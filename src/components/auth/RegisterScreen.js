import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [value, handleInputChange] = useForm({
        name: 'David',
        email: 'david@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = value;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is requered'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password is not valid'));
            return false;
        }

        dispatch(removeError());

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            {
                msgError &&
                (<div className='auth__alert-erorr'>
                    {msgError}
                </div>)
            }

            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={false}
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Create new account
                    </Link>
            </form>
        </>
    )
}
