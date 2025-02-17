import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

// Create a properly typed ThemeContext
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {}, // This will be overridden in the provider
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("vite-ui-theme") || "system"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    console.log("Applied theme:", appliedTheme); // Debugging
    root.classList.add(appliedTheme);
    localStorage.setItem("vite-ui-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
