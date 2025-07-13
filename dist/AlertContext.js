import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import CustomAlert from './CustomAlert';
const AlertContext = createContext(undefined);
export const AlertProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [config, setConfig] = useState({
        title: '',
        message: '',
    });
    const showAlert = (alertConfig) => {
        setConfig(alertConfig);
        setVisible(true);
    };
    const hideAlert = () => setVisible(false);
    return (_jsxs(AlertContext.Provider, { value: { showAlert, hideAlert }, children: [children, _jsx(CustomAlert, Object.assign({ visible: visible }, config, { onClose: hideAlert }))] }));
};
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context)
        throw new Error('useAlert must be used within AlertProvider');
    return context;
};
