# 📱 custom-react-native-alert

A **customizable global alert** system for **React Native** apps using the **Context API** and **Modal**.  
Easily show beautiful alerts with custom buttons and styles from anywhere in your app.

---

## 📦 Installation

```bash
npm install custom-react-native-alert
# or
yarn add custom-react-native-alert
```

---

## 🔧 Setup

Wrap your root component with the `AlertProvider`:

```tsx
// App.tsx
import React from 'react'
import { AlertProvider } from 'custom-react-native-alert'
import Main from './Main'

export default function App() {
	return (
		<AlertProvider>
			<Main />
		</AlertProvider>
	)
}
```

---

## 📣 Usage

Call `showAlert()` from anywhere inside your component tree:

```tsx
import { useAlert } from 'custom-react-native-alert'
import { Button } from 'react-native'

export default function Demo() {
	const { showAlert } = useAlert()

	return (
		<Button
			title="Show Alert"
			onPress={() =>
				showAlert({
					title: 'Confirm Logout',
					message: 'Are you sure you want to log out?',
					onConfirm: () => console.log('Logged out'),
				})
			}
		/>
	)
}
```

---

## 🧩 API

### `showAlert(config: AlertConfig)`

| Prop        | Type          | Required | Description                               |
| ----------- | ------------- | -------- | ----------------------------------------- |
| `title`     | `string`      | ✅       | Title of the alert                        |
| `message`   | `string`      | ✅       | Alert body text                           |
| `onConfirm` | `() => void`  | ❌       | Called when the default button is pressed |
| `buttons`   | `ReactNode[]` | ❌       | Optional custom buttons                   |
| `styles`    | `AlertStyles` | ❌       | Object to override styles (see below)     |

---

## 🎨 Custom Styles

You can pass a `styles` object inside `showAlert()` to override default styling.

### Available style keys:

```ts
interface AlertStyles {
	overlay?: ViewStyle
	container?: ViewStyle
	title?: TextStyle
	message?: TextStyle
	buttons?: ViewStyle
	okButton?: ViewStyle
	okText?: TextStyle
}
```

### Example:

```tsx
showAlert({
	title: 'Welcome',
	message: 'You can style this alert too!',
	styles: {
		container: { backgroundColor: '#222' },
		title: { color: 'white' },
		okButton: { backgroundColor: 'limegreen' },
	},
})
```

---

## 🧪 Custom Buttons

You can send an array of custom `ReactNode`s (e.g. `<TouchableOpacity />`) instead of using the default OK button:

```tsx
showAlert({
	title: 'Multiple Actions',
	message: 'Choose an option below',
	buttons: [
		<TouchableOpacity onPress={() => doSomething()}>
			<Text>Do</Text>
		</TouchableOpacity>,
		<TouchableOpacity onPress={() => cancel()}>
			<Text>Cancel</Text>
		</TouchableOpacity>,
	],
})
```
