import { ReactNode } from 'react';
export interface AlertStyles {
    overlay?: object;
    container?: object;
    title?: object;
    message?: object;
    buttons?: object;
    okButton?: object;
    okText?: object;
    cancelButton?: object;
    cancelText?: object;
}
export interface AlertConfig {
    title: string;
    message: string;
    onConfirm?: () => void;
    buttons?: ReactNode[];
    styles?: AlertStyles;
}
