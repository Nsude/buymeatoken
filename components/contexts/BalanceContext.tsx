"use client";

import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

type BalanceState = {
  sol: number;
  usd: number;
  lastUpdated: number | null;
  loading: boolean;
};

type BalanceAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: { sol: number; usd: number; lastUpdated: number } }

const initialState: BalanceState = {
  sol: 0,
  usd: 0,
  lastUpdated: null,
  loading: false,
};

function balanceReducer(state: BalanceState, action: BalanceAction): BalanceState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, ...action.payload, loading: false};
    default:
      return state;
  }
}

const BalanceContext = createContext<BalanceState | undefined>(undefined);

export const BalanceProvider = ({ children }: { children: React.ReactNode }) => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [state, dispatch] = useReducer(balanceReducer, initialState);
  const refreshInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!publicKey) return;

    const getUserBalance = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const lamports = await connection.getBalance(publicKey);
        const balance = lamports / LAMPORTS_PER_SOL;

        const response = await fetch("https://buymeatoken-production.up.railway.app/api/price");
        const data = await response.json();

        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            sol: balance,
            usd: data.price * balance,
            lastUpdated: data.timestamp,
          },
        });
      } catch (error: any) {
        console.error("Error updating balance: ", error)
      }
    };

    getUserBalance();
    refreshInterval.current = setInterval(getUserBalance, 30000);

    return () => {
      if (refreshInterval.current) clearInterval(refreshInterval.current);
    };
  }, [connection, publicKey]);

  return (
    <BalanceContext.Provider value={state}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
};