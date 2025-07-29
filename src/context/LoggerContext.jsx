import { createContext, useContext } from "react";

// Create the Logger Context
export const LoggerContext = createContext();

// Logger Provider to wrap the app
export const LoggerProvider = ({ children }) => {
  const logEvent = (action, details) => {
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");

    const newLog = {
      timestamp: new Date().toISOString(),
      action,
      details,
    };

    logs.push(newLog);
    localStorage.setItem("logs", JSON.stringify(logs));
  };

  return (
    <LoggerContext.Provider value={{ logEvent }}>
      {children}
    </LoggerContext.Provider>
  );
};

// Optional custom hook
export const useLogger = () => useContext(LoggerContext);
