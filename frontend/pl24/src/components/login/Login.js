import React, { useState } from 'react';
import styles from './Login.module.css'; // Import as a module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/admin/login', {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            const result = await response.json();
            console.log('Server Response:', result);
            setMessage(result.message);
    
            if (response.ok) {
                setIsAuthenticated(true); // Update authenticated state
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('Login failed due to an error.');
        }
    };
    
    // React fetch request with credentials
    const checkSession = async () => {
        try {
            const response = await fetch('http://localhost:8080/admin/dashboard', {
                method: 'GET',
                credentials: 'include' // Include cookies in the request
            });

            if (response.status === 401) {
                console.log('Session expired or unauthorized access.');
                setMessage('Session expired. Please log in again.');
                setIsAuthenticated(false);
            } else if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const result = await response.json();
                    console.log('Protected resource response:', result);
                    setMessage(result.message || 'You have access to the protected resource.');
                } else {
                    const result = await response.text();
                    console.log('Non-JSON response:', result);
                    setMessage(result || 'You have access to the protected resource.');
                }
            } else {
                const errorText = await response.text();
                console.log('Error Response:', errorText);
                setMessage(errorText || 'An error occurred while checking the session.');
            }
        } catch (error) {
            console.error('Error checking session:', error);
            setMessage('An error occurred while checking the session.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login to Account</h2>
                <p>Please enter your username and password to continue</p>
                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="user">Username:</label>
                        <input
                            type="text"
                            id="user"
                            name="username"
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
                            name="password"
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
                {message && <p className={styles.message}>{message}</p>} {/* Display message */}
                {/* Example button to check session */}
                {isAuthenticated && (
                    <button onClick={checkSession} className={styles.checkSessionButton}>
                        Check Session
                    </button>
                )}
            </div>
        </div>
    );
}

export default Login;
