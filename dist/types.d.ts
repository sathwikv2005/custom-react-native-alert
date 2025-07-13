import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
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
export interface ObjectButton {
    text: string;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}
export interface AlertConfig {
    title: string;
    message: string;
    onConfirm?: () => void;
    buttons?: (ReactNode | ObjectButton)[];
    styles?: AlertStyles;
}
export declare function isObjectButton(btn: any): btn is ObjectButton;
