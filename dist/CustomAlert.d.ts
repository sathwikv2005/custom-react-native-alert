import React from 'react';
import { AlertConfig } from './types';
interface Props extends AlertConfig {
    visible: boolean;
    onClose: () => void;
}
declare const CustomAlert: React.FC<Props>;
export default CustomAlert;
