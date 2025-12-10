'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, db } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  user: User | null;
}

const UserContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, 'users', email), {
      watchList: [],
    });
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserAuth must be used within an AuthContextProvider');
  }
  return context;
};
