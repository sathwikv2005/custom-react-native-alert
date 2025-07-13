// Type guard to check if a button is an object-style button
export function isObjectButton(btn) {
    return btn && typeof btn === 'object' && typeof btn.text === 'string';
}
