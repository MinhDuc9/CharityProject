import React, { useState } from 'react';
import styles from './Login.module.css'; // Import as a module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login to Account</h2>
                <p>Please enter your username and password to continue</p>
                <form
                    action="http://localhost:8080/admin/login" // Replace with your API URL
                    method="GET"
                >
                    <div className={styles.inputGroup}>
                        <label htmlFor="user">Username:</label>
                        <input
                            type="text"
                            id="user"
                            name="username" // This name should match the expected field in your backend
                            placeholder="your_username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password" // This name should match the expected field in your backend
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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
