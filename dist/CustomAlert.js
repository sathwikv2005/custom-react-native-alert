import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
const CustomAlert = ({ visible, title, message, onConfirm, onClose, buttons, styles: customStyles = {}, }) => {
    const renderButtons = () => {
        if (buttons && buttons.length > 0) {
            return buttons.map((btn, idx) => (_jsx(View, { style: { marginLeft: 8 }, children: btn }, idx)));
        }
        return (_jsx(Pressable, { style: [styles.button, styles.okButton, customStyles.okButton], onPress: () => {
                onClose();
                onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
            }, children: _jsx(Text, { style: [styles.buttonText, customStyles.okText], children: "Close" }) }));
    };
    return (_jsx(Modal, { visible: visible, transparent: true, animationType: "fade", children: _jsx(View, { style: [styles.overlay, customStyles.overlay], children: _jsxs(View, { style: [styles.container, customStyles.container], children: [title ? (_jsx(Text, { style: [styles.title, customStyles.title], children: title })) : null, message ? (_jsx(Text, { style: [styles.message, customStyles.message], children: message })) : null, _jsx(View, { style: [styles.buttons, customStyles.buttons], children: renderButtons() })] }) }) }));
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
    button: {
        marginLeft: 10,
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
