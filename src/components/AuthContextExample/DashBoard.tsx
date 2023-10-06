// Dashboard.js

import {AuthContextType, useAuth } from "./AuthContext";

function Dashboard() {
  const { user, logout }: AuthContextType = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Hello, {user}! This is the Dashboard.</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <p>You are not logged in. Please log in to access the Dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;
