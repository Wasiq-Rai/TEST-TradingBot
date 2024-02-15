import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Background from '../Background/Background';

// Input Field Component
const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

// LoginForm Component
const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <InputField
        label="Email Address"
        type={showPassword ? 'text' : 'email'}
        name="email"
        value={''}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Yourname@email.com"
      />
      <div className="password-input-field">
        <label htmlFor="password">Password</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="password-toggle-button"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div className="forgot-password-link">
        <a href="#">Forgot Password?</a>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

// Content Component
const Login = () => {
  return (
    <div className="sign-up-content banner-bg">
      <Background>
        
      </Background>

      <div className='sign-up-container sign-in-container'>
        <div className='sign-in-form-side'>
          <div className="sign-in">
            <h2>Sign In</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;