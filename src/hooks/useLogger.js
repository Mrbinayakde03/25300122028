import { useContext } from "react";
import { LoggerContext } from "../context/LoggerContext";

/**
 * Custom hook to access the logging functionality.
 * Usage: const { log } = useLogger();
 */
const useLogger = () => {
  const context = useContext(LoggerContext);

  if (!context) {
    throw new Error("useLogger must be used within a LoggerProvider");
  }

  const log = (action, details) => {
    context.logEvent(action, details);
  };

  return { log };
};

export default useLogger;
