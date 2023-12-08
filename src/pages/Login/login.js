import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  return (
    <div className='container-fluid'>
        <div className="login-form">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="E-mail"
            />
            <input
                type="password"
                placeholder="Senha"
            />
            <Link to="/home">
              <button>Login</button>
            </Link>
        </div>
    </div>
  );
}

export default Login;