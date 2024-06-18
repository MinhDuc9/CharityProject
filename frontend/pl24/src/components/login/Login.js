// src/components/Login.js
import React from 'react';
import styles from './Login.module.css'; // Import as a module

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login to Account</h2>
                <p>Please enter your email and password to continue</p>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" name="email" placeholder="your_email@example.com" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required />
                        <a href="#forgot" className={styles.forgotPassword}>Forget Password?</a>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Remember Password</label>
                    </div>
                    <button type="submit" className={styles.loginButton}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
