import { createContext } from "react";

import { Error } from "@shared/components/types";

interface IProps {
  error: Error | null;
  setError: (error: Error | null) => void;
}

export const ErrorContext = createContext({} as IProps);
