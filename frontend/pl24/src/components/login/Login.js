import React, { useState } from 'react';
import styles from './Login.module.css'; // Import as a module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:8080/admin/login', {
                method: 'POST', // Change to POST
                headers: {
                    'Content-Type': 'application/json' // Indicate that we're sending JSON
                },
                body: JSON.stringify({ username, password }) // Send the username and password as JSON
            });

            if (response.ok) {
                const result = await response.text(); // Read the response as text
                console.log('Server Response:', result); // Log the response message to console
                setMessage(result); // Set the response message (could be success or error)
            } else {
                const errorText = await response.text();
                console.log('Error Response:', errorText); // Log the error message to console
                setMessage(errorText); // Set the response message (could be success or error)
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('Login failed due to an error.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login to Account</h2>
                <p>Please enter your username and password to continue</p>
                <form onSubmit={handleSubmit}> {/* Remove action and method */}
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
            </div>
        </div>
    );
}

export default Login;
