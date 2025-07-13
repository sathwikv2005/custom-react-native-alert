import React, { createContext, useContext, useState, ReactNode } from 'react'
import CustomAlert from './CustomAlert'
import { AlertConfig } from './types'

interface AlertContextType {
	showAlert: (config: AlertConfig) => void
	hideAlert: () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

interface Props {
	children: ReactNode
}

export const AlertProvider = ({ children }: Props) => {
	const [visible, setVisible] = useState(false)
	const [config, setConfig] = useState<AlertConfig>({
		title: '',
		message: '',
	})

	const showAlert = (alertConfig: AlertConfig) => {
		setConfig(alertConfig)
		setVisible(true)
	}

	const hideAlert = () => setVisible(false)

	return (
		<AlertContext.Provider value={{ showAlert, hideAlert }}>
			{children}
			<CustomAlert visible={visible} {...config} onClose={hideAlert} />
		</AlertContext.Provider>
	)
}

export const useAlert = (): AlertContextType => {
	const context = useContext(AlertContext)
	if (!context) throw new Error('useAlert must be used within AlertProvider')
	return context
}
