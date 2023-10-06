// Home.js
import { useState } from 'react';
import { AuthContextType, useAuth } from './AuthContext';

function Home() {
  const { login, user }:AuthContextType = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user}! You are logged in. </p>
      ) : (
        <div>
          <p>Please log in:</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default Home;
