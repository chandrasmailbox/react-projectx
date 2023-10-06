// AuthContext.js
import { createContext, useContext, useState } from "react";

export interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const auth = useContext(AuthContext);
  if (auth===undefined) {
    console.error("Error using context AuthContext");
  }
  return auth;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string) => {
    // Simulate authentication logic (e.g., check credentials with a server)
    if (username === "user" && password === "password") {
      setUser(username);
    } else {
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
