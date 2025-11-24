import { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: number;
  name?: string;
  full_name?: string;
  email: string;
} | null;

const AuthContext = createContext<{
  user: User;
  setUser: (u: User) => void;
}>({
  user: null,
  setUser: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
