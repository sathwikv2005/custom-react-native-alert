import React, { ReactNode, isValidElement } from 'react'
import { Modal, View, Text, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { AlertConfig, isObjectButton } from './types'

interface Props extends AlertConfig {
	visible: boolean
	onClose: () => void
}

const CustomAlert: React.FC<Props> = ({
	visible,
	title,
	message,
	onConfirm,
	onClose,
	buttons,
	styles: customStyles = {},
}) => {
	const renderButtons = () => {
		if (buttons && buttons.length > 0) {
			return buttons.map((btn, idx) => {
				if (isValidElement(btn)) {
					return (
						<View key={idx} style={{ marginLeft: 8 }}>
							{btn}
						</View>
					)
				}

				if (isObjectButton(btn)) {
					const { text, onPress, style: buttonStyle, textStyle } = btn
					return (
						<Pressable
							key={idx}
							onPress={() => {
								onClose()
								onPress?.()
							}}
							style={[
								{
									paddingVertical: 10,
									paddingHorizontal: 14,
									borderRadius: 8,
									marginLeft: 8,
								},
								buttonStyle,
							]}
						>
							<Text style={[{ fontSize: 15 }, textStyle]}>{text}</Text>
						</Pressable>
					)
				}

				return null
			})
		}

		// Fallback OK button
		return (
			<Pressable
				style={[styles.okButton, { marginLeft: 8 }, customStyles.okButton as ViewStyle]}
				onPress={() => {
					onClose()
					onConfirm?.()
				}}
			>
				<Text style={[styles.buttonText, customStyles.okText as TextStyle]}>Close</Text>
			</Pressable>
		)
	}

	return (
		<Modal visible={visible} transparent animationType="fade">
			<View style={[styles.overlay, customStyles.overlay as ViewStyle]}>
				<View style={[styles.container, customStyles.container as ViewStyle]}>
					{title ? (
						<Text style={[styles.title, customStyles.title as TextStyle]}>{title}</Text>
					) : null}
					{message ? (
						<Text style={[styles.message, customStyles.message as TextStyle]}>{message}</Text>
					) : null}
					<View style={[styles.buttons, customStyles.buttons as ViewStyle]}>{renderButtons()}</View>
				</View>
			</View>
		</Modal>
	)
}

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
})

export default CustomAlert
