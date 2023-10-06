// App.js
import { AuthProvider } from './AuthContext';
import Dashboard from './DashBoard';
import Home from './Home';

function AuthContextApp() {
  return (
    <AuthProvider>
      <div>
        <h1>Authentication Example</h1>
        <Home />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default AuthContextApp;
