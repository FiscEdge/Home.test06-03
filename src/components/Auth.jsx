import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle authentication
    // For now, we'll just redirect to the dashboard
    router.push('https://auth-psi-dun.vercel.app/auth/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          {!isLogin && (
            <>
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Company Name" required />
              </div>
            </>
          )}
          <button type="submit" className="button button-primary">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              className="link-button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-buttons">
            <button className="social-button google">
              <img src="/google-icon.png" alt="Google" />
              Google
            </button>
            <button className="social-button facebook">
              <img src="/facebook-icon.png" alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
