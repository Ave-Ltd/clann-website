import { createContext, useContext, useState, useEffect } from "react";
import rawConfig from "../data/associationConfig.json";

export type AssociationData = Record<string, string>; // flexible for dynamic fields

// 👇 FIX: explicitly type the config JSON
const config: Record<string, AssociationData> = rawConfig;

const AssociationContext = createContext<{
  key: string | null;
  config: AssociationData | null;
  setAssociation: (key: string) => void;
}>({
  key: null,
  config: null,
  setAssociation: () => {},
});

export const AssociationProvider = ({ children }: { children: React.ReactNode }) => {
  const [key, setKey] = useState<string | null>(null);
  const [association, setAssociationState] = useState<AssociationData | null>(null);

  const setAssociation = (key: string) => {
    if (config[key]) {
      setKey(key);
      setAssociationState(config[key]);
      localStorage.setItem("association", key);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("association");
    if (saved && config[saved]) {
      setAssociation(saved);
    }
  }, []);

  return (
    <AssociationContext.Provider value={{ key, config: association, setAssociation }}>
      {children}
    </AssociationContext.Provider>
  );
};

export const useAssociation = () => useContext(AssociationContext);
