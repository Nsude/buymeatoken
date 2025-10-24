"use client";
import { createContext, useContext, useState } from "react";
import { ButtonLabel } from "../../app.models";

interface LoadingContextType {
  loadingKeys: Record<ButtonLabel, boolean>;
  setLoadingButton: (key: ButtonLabel, isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const ButtonLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingKeys, setLoadingKeys] = useState<Record<string, boolean>>({});

  const setLoadingButton = (key: string, isLoading: boolean) => {
    setLoadingKeys(prev => ({ ...prev, [key]: isLoading }));
  };

  return (
    <LoadingContext.Provider value={{ loadingKeys, setLoadingButton }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingButton = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("useLoading must be used within a LoadingProvider");
  return context;
};
