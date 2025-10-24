"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  _id: string;
  username: string | null;
  mainAddress: string;
  merchantId: string;
  withdrawAddress: string;
  nonce: number;
  publicKey: string;
  role: "merchant" | "admin";
  createdAt: string;
  updatedAt: string;
  __v: number;
}


interface UserContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  error: null,
});

export const useCurrentUser = () => {
  let context = useContext(UserContext);
  if (!context) throw new Error("cannot use context outside user context provider");

  return context;
};

export const UserContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {wallet, connected} = useWallet();

  useEffect(() => {
    if (!connected || !wallet) return;

    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://buymeatoken-production.up.railway.app/api/user/by-userid/`,
          {
            method: "GET",
            headers: {"auth-token": authToken}
          }
        );
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [connected, wallet]);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
