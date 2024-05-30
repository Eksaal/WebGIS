import React, { useState } from 'react';

const LoginForm = ({ isClient }) => {
  const [showLoginForm, setShowLoginForm] = isClient ? useState(false) : [false, null];

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className={`login ${showLoginForm ? 'show' : ''}`} id="login">
      <div className="isi">
        <h1><span className="font-bold">Login UMKM</span> GEBANG PUTIH</h1>
        <div className="login-form">
          <label htmlFor="email" className="form-label">Username</label>
          <input type="email" className="form-input" id="email" placeholder="Enter your email" />
        </div>
        <div className="login-form">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-input" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-checkbox" id="checkbox" />
          <label className="form-label" htmlFor="checkbox">Remember me</label>
        </div>
        <button type="submit" className="kirim bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        <span className="block inline tidak">Tidak memiliki akun?<a href="#" className="klik inline text-blue-500">Klik disini</a></span>
        <a href="#" className="close" onClick={toggleLoginForm}>&times;</a>
      </div>
    </div>
  );
};

export default LoginForm;
