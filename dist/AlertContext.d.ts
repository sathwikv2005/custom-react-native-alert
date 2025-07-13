import { ReactNode } from 'react';
import { AlertConfig } from './types';
interface AlertContextType {
    showAlert: (config: AlertConfig) => void;
    hideAlert: () => void;
}
interface Props {
    children: ReactNode;
}
export declare const AlertProvider: ({ children }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const useAlert: () => AlertContextType;
export {};
