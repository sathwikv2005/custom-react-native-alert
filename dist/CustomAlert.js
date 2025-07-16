import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isValidElement } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, ScrollView, } from 'react-native';
import { isObjectButton } from './types';
import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const CustomAlert = ({ visible, title, message, onConfirm, onClose, buttons, styles: customStyles = {}, }) => {
    const renderButtons = () => {
        if (buttons && buttons.length > 0) {
            return buttons.map((btn, idx) => {
                if (isValidElement(btn)) {
                    return (_jsx(View, { style: { marginLeft: 8 }, children: btn }, idx));
                }
                if (isObjectButton(btn)) {
                    const { text, onPress, style: buttonStyle, textStyle } = btn;
                    return (_jsx(Pressable, { onPress: () => {
                            onClose();
                            onPress === null || onPress === void 0 ? void 0 : onPress();
                        }, style: [
                            {
                                paddingVertical: 10,
                                paddingHorizontal: 14,
                                borderRadius: 8,
                                marginLeft: 8,
                            },
                            buttonStyle,
                        ], children: _jsx(Text, { style: [{ fontSize: 15 }, textStyle], children: text }) }, idx));
                }
                return null;
            });
        }
        // Fallback OK button
        return (_jsx(Pressable, { style: [styles.okButton, { marginLeft: 8 }, customStyles.okButton], onPress: () => {
                onClose();
                onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
            }, children: _jsx(Text, { style: [styles.buttonText, customStyles.okText], children: "Close" }) }));
    };
    return (_jsx(Modal, { visible: visible, transparent: true, animationType: "fade", children: _jsx(View, { style: [styles.overlay, customStyles.overlay], children: _jsxs(View, { style: [styles.container, customStyles.container], children: [title ? (_jsx(Text, { style: [styles.title, customStyles.title], children: title })) : null, message ? (_jsx(View, { style: { maxHeight: screenHeight * 0.4, marginBottom: 20 }, children: _jsx(ScrollView, { children: _jsx(Text, { style: [styles.message, customStyles.message], children: message }) }) })) : null, _jsx(View, { style: [styles.buttons, customStyles.buttons], children: renderButtons() })] }) }) }));
};
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 300,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        elevation: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
    },
    okButton: {
        backgroundColor: '#2196f3',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
});
export default CustomAlert;
