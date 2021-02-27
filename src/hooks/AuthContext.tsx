import { createContext, useState, useContext, useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
  id: number;
  name: string;
  avatar_url: string;
}

interface User {
  id: number;
  name: string;
  avatar_url: string;
}

interface AuthContextData {
  user: User;
}

const AuthContext = createContext();

function AuthProvider({ children, ...rest }: AuthProviderProps) {
  const [user, setUser] = useState<User>({
    id: rest.id,
    name: rest.name ?? 'Joao',
    avatar_url: rest.avatar_url
  });

  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }
